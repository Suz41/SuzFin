/**
 * SuzFin Add-on: Time Remaining on Resume / Continue Watching Cards
 * 
 * Automatically calculates and displays remaining watch time (e.g. "42m left")
 * on cards in the Continue Watching / Resume sections.
 */

(function () {
    'use strict';

    const itemCache = new Map();

    function formatTimeRemaining(ticks) {
        if (!ticks || ticks <= 0) return null;
        const totalMinutes = Math.round(ticks / (10000 * 1000 * 60));
        if (totalMinutes <= 0) return '1m left';
        if (totalMinutes < 60) {
            return `${totalMinutes}m left`;
        }
        const hours = Math.floor(totalMinutes / 60);
        const mins = totalMinutes % 60;
        return mins > 0 ? `${hours}h ${mins}m left` : `${hours}h left`;
    }

    async function updateCardTime(card) {
        if (card.querySelector('.suzfin-time-badge')) return;

        const itemId = card.getAttribute('data-id');
        if (!itemId || !window.ApiClient) return;

        let item = itemCache.get(itemId);
        if (!item) {
            try {
                const userId = window.ApiClient.getCurrentUserId();
                item = await window.ApiClient.getItem(userId, itemId);
                if (item) itemCache.set(itemId, item);
            } catch (err) {
                return;
            }
        }

        if (!item || !item.RunTimeTicks || !item.UserData || !item.UserData.PlaybackPositionTicks) {
            return;
        }

        const remainingTicks = item.RunTimeTicks - item.UserData.PlaybackPositionTicks;
        const timeText = formatTimeRemaining(remainingTicks);
        if (!timeText) return;

        // Prevent duplicate injection
        if (card.querySelector('.suzfin-time-badge')) return;

        // 1. Add as a badge on the poster or in secondary text
        const badge = document.createElement('span');
        badge.className = 'suzfin-time-badge';
        badge.textContent = timeText;

        const secondaryText = card.querySelector('.cardText-secondary');
        if (secondaryText) {
            const separator = document.createElement('span');
            separator.className = 'suzfin-time-separator';
            separator.textContent = ' • ';
            secondaryText.appendChild(separator);
            secondaryText.appendChild(badge);
        } else {
            // Fallback: place badge over thumbnail
            const imageContainer = card.querySelector('.cardImageContainer') || card.querySelector('.cardScalable');
            if (imageContainer) {
                badge.classList.add('suzfin-badge-overlay');
                imageContainer.appendChild(badge);
            }
        }
    }

    function scanResumeCards() {
        // Find all cards with an active progress bar (in continue watching / resume)
        const progressBars = document.querySelectorAll('.itemProgressBar, .innerCardFooterProgress');
        progressBars.forEach(bar => {
            const card = bar.closest('.card');
            if (card) {
                updateCardTime(card);
            }
        });
    }

    // Observer to scan dynamically loaded cards
    const observer = new MutationObserver(() => {
        scanResumeCards();
    });

    function init() {
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
        scanResumeCards();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

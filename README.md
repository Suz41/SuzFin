# 💜 SuzFin

A refined, cross-platform theme for **Jellyfin**, powered by [ElegantFin](https://github.com/lscambo13/ElegantFin) and enhanced with Samsung Tizen TV remote navigation fixes, centered glass play controls, and cohesive purple branding.

Works seamlessly across **Samsung Tizen TV**, **PC Desktop**, and **Mobile**.

---

## ✨ Enhancements Over Base ElegantFin

- 📺 **Samsung Tizen TV (`.layout-tv`):** Fixes TV remote D-Pad navigation with high-visibility glowing focus rings (`outline: 3px solid #ffffff; transform: scale(1.08)`).
- 🎯 **Centered Glass Play Button:** Replaced the clunky corner green icon with a modern, centered frosted-glass button with smooth hover scaling and purple glow.
- 🖼️ **Crystal Clear Posters:** Eliminated foggy card footer blur bars over poster artwork.
- 💜 **Cohesive Palette:** Harmonized with signature `suz` purple accents (`#8b5cf6`).
- ⏱️ **Slim Glowing Progress Bar:** Minimalist 4px floating progress pill with support for remaining-time display.
- 📱 **Mobile Touch Friendly:** Clean layout with desktop hover artifacts disabled for touchscreens.

---

## 🚀 Quick Install

### In Jellyfin:

1. Open Jellyfin $\rightarrow$ **Dashboard** $\rightarrow$ **General** *(or User Profile $\rightarrow$ **Display**)*.
2. In the **Custom CSS code** field, paste:

```css
@import url("https://cdn.jsdelivr.net/gh/Suz41/SuzFin@main/theme.css");
```

3. Click **Save** and refresh (`Ctrl + Shift + R` on PC, or restart the app on your TV/Mobile).

---

## ⏱️ Optional: Show Exact Time Remaining on Resume Cards

To show the exact remaining time (e.g. `2011 • 45m left`) on Continue Watching cards, load the included script via the **Jellyfin JavaScript Injector** plugin:

```html
<script src="https://cdn.jsdelivr.net/gh/Suz41/SuzFin@main/addons/resume-time.js"></script>
```

---

## 📜 Credits & Base Work
- Base theme: [ElegantFin](https://github.com/lscambo13/ElegantFin) by lscambo13.
- JF12 layout patch: [elegantfin-jf12](https://github.com/mihaif7/elegantfin-jf12) by mihaif7.

---

## 📄 License
[MIT License](LICENSE) © 2026 Suz41

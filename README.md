# 🍎 SuzFin — Apple TV (tvOS) Edition

A refined, cross-platform theme for **Jellyfin**, powered by [ElegantFin](https://github.com/lscambo13/ElegantFin) and completely overhauled into a pure **Apple TV monochrome & frosted glass design** (zero purple, zero clashing colors).

Works seamlessly across **Samsung Tizen TV**, **PC Desktop**, and **Mobile**.

---

## ✨ Highlights

- 📺 **Samsung Tizen TV Remote Navigation:** High-contrast 3px glowing focus ring (`outline: 3px solid #ffffff; transform: scale(1.08)`) optimized for 10-foot D-Pad remote navigation.
- 🎬 **Apple TV Cinematic Details Page:** Fullscreen cinematic backdrop, solid white Apple Play/Resume pill, circular frosted-glass buttons, and zero clutter.
- 🎯 **Centered Frosted Glass Play Button:** Sleek centered play icon on desktop hover with frosted blur and white glow.
- 🖼️ **Crystal Clear Posters:** No foggy/blurred footer bars covering your artwork.
- ⏱️ **Minimalist Progress Bar:** Floating 4px glowing silver/white progress pill with time-remaining support.
- 🖤 **Pure Monochrome Palette:** 100% Apple TV styling with deep dark surfaces, white typography, and subtle neutral grays (no purple or neon tints).

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
- Customizations & Apple TV styling: [SuzFin](https://github.com/Suz41/SuzFin) by Suz41.

---

## 📄 License
[MIT License](LICENSE) © 2026 Suz41

# 🍎 SuzFin — Apple TV (tvOS) Edition

A clean, modern, and lightweight theme for **Jellyfin**, inspired by the design language of **Apple TV+ and tvOS**.

Built completely from scratch to deliver a unified, premium streaming experience across **Samsung Tizen TV**, **PC Desktop**, and **Mobile**.

---

## ✨ Features

- 📺 **Native Samsung Tizen TV Support:** Fully optimized for `.layout-tv` and TV remote D-Pad navigation. Selected posters scale up smoothly (`scale(1.08)`) with a high-contrast glowing focus outline for 10-foot viewing.
- 🖤 **Deep OLED Dark Canvas:** Pure, immersive dark surfaces (`#08080a`) with cinematic backdrop lighting.
- 🌫️ **Frosted Glass Top Shelf:** Translucent floating navigation bar with pill-shaped tab selectors and backdrop blur.
- 🎯 **Apple Centered Play Button:** Sleek frosted-glass center play icon on desktop hover (no clunky corner buttons).
- ⏱️ **Minimalist Progress Indicators:** Clean glowing silver/white progress bars for Resume & Continue Watching.
- ⚡ **Zero Bloat:** 100% standalone and lightweight (no slow or buggy external dependencies).

---

## 🚀 Quick Install

### In Jellyfin Web / Dashboard:

1. Open your Jellyfin server.
2. Go to **Dashboard** $\rightarrow$ **General** *(or click your profile avatar $\rightarrow$ **Display**)*.
3. Scroll down to the **Custom CSS code** field.
4. Paste the import URL:

```css
@import url("https://cdn.jsdelivr.net/gh/Suz41/SuzFin@main/theme.css");
```

5. Click **Save** and refresh your screen (`Ctrl + Shift + R` on PC, or restart the app on your TV/Mobile).

---

## ⏱️ Optional: Show Exact Time Remaining on Resume Cards

If you want cards in **Continue Watching** to show the exact time remaining (e.g. `2011 • 45m left`), load the included companion script via the **Jellyfin JavaScript Injector** plugin:

```html
<script src="https://cdn.jsdelivr.net/gh/Suz41/SuzFin@main/addons/resume-time.js"></script>
```

---

## 📄 License
[MIT License](LICENSE) © 2026 Suz41

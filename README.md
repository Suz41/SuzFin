# 💜 SuzFin

A refined, modern, and aesthetic theme for **Jellyfin**, tailored with cohesive purple accents, smooth card animations, and a sleek **centered glassmorphic play button** that replaces the default clunky green corner icon.

Inspired by [ElegantFin](https://github.com/lscambo13/ElegantFin) and optimized for modern Jellyfin instances (including Jellyfin 12 and the [Fishbowl](https://github.com/Suz41/Fishbowl) Android server ecosystem).

---

## ✨ Highlights

- 🎯 **Centered Glassmorphic Play Button:** Beautiful frosted-glass play icon in the center of cards on hover with smooth zoom effects (no more awkward green buttons in the bottom corner!).
- 💜 **Harmonious Purple Accents:** Tailored palette matching the signature `suz` purple aesthetics (`#8b5cf6`).
- ⚡ **Jellyfin 12 Modern UI Ready:** Built-in compatibility layer for Jellyfin 12 layout changes.
- 🌫️ **Frosted Glass Header:** Semi-transparent blurred navigation header that blends into media backdrops.
- 📱 **Cross-Platform:** Looks stunning on Desktop, Mobile, and Tablet.

---

## 🚀 Quick Install

### Method: Custom CSS (Recommended)

1. Open your Jellyfin server.
2. Go to **Dashboard** $\rightarrow$ **General** *(or click your profile avatar $\rightarrow$ **Display**)*.
3. Scroll down to the **Custom CSS code** field.
4. Paste the following line:

```css
@import url("https://cdn.jsdelivr.net/gh/Suz41/SuzFin@main/theme.css");
```

5. Click **Save** and refresh your browser (`Ctrl + Shift + R`).

---

## 🧩 Optional Add-ons

You can layer any of these add-on imports **below** the main `@import` line in your Custom CSS box:

### 1. Pure OLED Pitch Black Mode
For deep blacks on OLED screens and mobile displays:
```css
@import url("https://cdn.jsdelivr.net/gh/Suz41/SuzFin@main/addons/oled-black.css");
```

### 2. Centered Purple Glow Play Button
If you prefer a purple play button over the frosted glass look:
```css
@import url("https://cdn.jsdelivr.net/gh/Suz41/SuzFin@main/addons/play-button-purple.css");
```

### 3. Minimalist Mode (Hide Card Play Button)
If you prefer completely clean posters with zero overlay buttons:
```css
@import url("https://cdn.jsdelivr.net/gh/Suz41/SuzFin@main/addons/hide-play-button.css");
```

---

## 🎨 Fine-Tuning & Custom Variables

You can customize variables at any time by placing a `:root` block below your import:

```css
:root {
    /* Change accent color */
    --accentColor: #a855f7;
    
    /* Adjust poster corner roundness (0 for square, 1.5em for extra round) */
    --largeRadius: 1em;
}
```

---

## 📜 Credits & Acknowledgments
- Built upon the excellent base work by [lscambo13](https://github.com/lscambo13/ElegantFin).
- Jellyfin 12 modern layout fixes inspired by [mihaif7](https://github.com/mihaif7/elegantfin-jf12).

---

## 📄 License
[MIT License](LICENSE) © 2026 Suz41

# 🍎 SuzFin

A modern, standalone Jellyfin theme with dedicated support for PC, Mobile, and Samsung Tizen Smart TVs.

---

## 🚀 Quick Install

Add this to your Jellyfin **Custom CSS code** field (**Dashboard** $\rightarrow$ **General** / **Branding** or user **Display** settings):

```css
@import url("https://cdn.jsdelivr.net/gh/Suz41/SuzFin@main/theme.css");
```

Click **Save** and refresh (`Ctrl + Shift + R` or reload TV app).

---

## 📺 Samsung Tizen TV & Smart TV Setup

On a Smart TV, you navigate with a remote control D-Pad from across the room. SuzFin provides a dedicated **Samsung Tizen TV Performance & Focus Pack** add-on that removes sluggish blur shaders on low-RAM TV chips, hides browser scrollbars, and adds a bright high-contrast D-pad focus indicator:

```css
@import url("https://cdn.jsdelivr.net/gh/Suz41/SuzFin@main/theme.css");
@import url("https://cdn.jsdelivr.net/gh/Suz41/SuzFin@main/addons/tizen-tv.css");
```

---

## 🧩 Optional Add-ons

Layer any of these add-ons **below** your main `@import` line:

### 1. Samsung Tizen TV Performance & Remote Focus
```css
@import url("https://cdn.jsdelivr.net/gh/Suz41/SuzFin@main/addons/tizen-tv.css");
```

### 2. Pure OLED Pitch Black Mode
For deep blacks on Samsung OLED and QLED screens:
```css
@import url("https://cdn.jsdelivr.net/gh/Suz41/SuzFin@main/addons/oled-black.css");
```

### 3. Minimalist Mode (Hide Card Play Button)
If you prefer clean posters with zero overlay buttons:
```css
@import url("https://cdn.jsdelivr.net/gh/Suz41/SuzFin@main/addons/hide-play-button.css");
```

---

## 🎨 Customizing Remote Focus Colors

You can customize the TV focus ring color anytime by adding this `:root` block below your imports:

```css
:root {
    /* Samsung TV Remote Focus Color */
    --tvFocusBorderColor: #00e5ff;
    --tvFocusGlow: rgba(0, 229, 255, 0.85);
}
```

---

## 📄 License
[MIT License](LICENSE) © 2026 Suz41

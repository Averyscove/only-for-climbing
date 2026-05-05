# All for Climbing — Logo Handoff

A standalone bundle of the new **All for Climbing** logo system: the mark, lockups, color rules, and a guide for where each variant goes in the app.

> Replaces the placeholder "uClimb" wordmark. Same path, new identity.

---

## What's in this folder

```
logo_handoff_AFC/
├── README.md                ← this file
├── usage-map.html           ← interactive: open in a browser to see every placement
├── svg/                     ← master vector assets (use these)
│   ├── mark-black.svg
│   ├── mark-white.svg
│   ├── icon-orange.svg      ← app icon — primary
│   ├── icon-black.svg       ← app icon — alt for dark/photo backgrounds
│   ├── icon-knockout.svg    ← stamp / sticker variant
│   ├── lockup-horizontal-black.svg
│   ├── lockup-horizontal-white.svg
│   ├── lockup-stacked-black.svg
│   ├── lockup-stacked-white.svg
│   └── favicon-32.svg
├── png/                     ← rasterized exports for stores / OG images
│   ├── app-icon-orange-1024.png   ← App Store / Play Store
│   ├── app-icon-orange-512.png
│   ├── app-icon-orange-180.png    ← iOS home screen
│   ├── app-icon-black-1024.png
│   ├── mark-black-512.png
│   └── mark-white-512.png
└── code/
    └── AFCMark.jsx          ← drop-in React component, same path as SVG
```

---

## The mark

A mountain silhouette with a lightning-bolt notch — traced from the source icon. Pure SVG. Single closed path on a `100×100` viewBox.

**SVG path data:**
```
M 10.5 76.2 L 29.7 51.3 L 34.8 56.6 L 57.7 21.6 L 64.5 39 L 60 41.5 L 68 41.5 L 75 51.7 L 88.7 76.2 Z
```

The mark is one fill color. It always sits inside an implicit square; do not stretch it non-uniformly. Minimum size **16 px** before it loses the bolt notch.

---

## Color

| Token   | Hex       | Use |
|---------|-----------|-----|
| Ink     | `#13110e` | Default mark color on light surfaces |
| Paper   | `#ece4d6` | Chalky cream background |
| Accent  | `#e85d2a` | App-icon background, the trailing `.` in the wordmark, **never** the mark itself |
| White   | `#ffffff` | Mark color on dark photos, dark surfaces, and on the orange app-icon tile |

**Rules:**
1. The mark is **black, white, or knocked out**. Never orange. Orange is reserved for the app icon background and the wordmark dot.
2. On photography, always use the white mark with at least 35 % dim overlay on the photo behind it.
3. Don't recolor the mark to match a brand partner. Use it on a neutral surface instead.

---

## Variants — when to use which

### 1. App icon — `icon-orange.svg`
Primary marketing identity. **Use everywhere a single square represents the app:**
- iOS / Android home-screen icon
- App Store / Play Store listing
- Social profile pictures (Instagram, X, etc.)
- Browser tab favicon (`favicon-32.svg` is the simplified mono version)
- Splash / launch screen

### 2. App icon — `icon-black.svg`
Alternate when the orange would clash:
- Dark-mode app icon
- Email signature on a colored letterhead
- Apparel & merch where orange would compete with the garment

### 3. Mark only — `mark-black.svg` / `mark-white.svg`
Standalone silhouette, no container, no wordmark. Use when the wordmark is **already established** in the same view, or when space is tight:
- Inline header next to the page title (small ~14–18 px)
- Watermark in the corner of share cards
- Newspaper-style masthead bullets ("● ALL FOR CLIMBING DAILY")
- Achievement-card stamp

### 4. Horizontal lockup — `lockup-horizontal-*.svg`
Mark + "All for Climbing." in Archivo Black. Use as the **primary brand signature** in marketing surfaces:
- Onboarding / welcome screen
- Landing page header & footer
- Email header
- Share card byline (e.g. bottom-right of a send certificate)

### 5. Stacked lockup — `lockup-stacked-*.svg`
Two-line variant for square-ish areas:
- Centered chat-empty-state hero
- Print materials (poster, flyer)
- Loading screen

### 6. Mono favicon — `favicon-32.svg`
The mark with no background. Use as `<link rel="icon" type="image/svg+xml" href="favicon-32.svg">`.

---

## Where each variant lives in the app

The interactive map is in **`usage-map.html`** — open it for an annotated visual. Quick reference:

| Surface                          | Variant                          |
|----------------------------------|----------------------------------|
| iOS home-screen icon             | `icon-orange.svg` @ 180 / 1024   |
| Onboarding splash                | Horizontal lockup, white         |
| Feed top header                  | Horizontal lockup, ink, ~20 px   |
| Profile / settings nav title     | Mark only, ink, 14 px            |
| Empty-state hero (chat, search)  | Stacked lockup, ink              |
| Share card — chalkboard variant  | Horizontal lockup top, ink       |
| Share card — editorial photo     | Horizontal lockup top, white     |
| Share card — newspaper masthead  | Mark + "ALL FOR CLIMBING DAILY" mono |
| Share card — bottom byline       | Small horizontal lockup, ink     |
| Achievement card watermark       | Small mark, ink, on dashed border|
| Achievement card "TOPO" tag      | Mark + "ALL FOR CLIMBING · TOPO" mono, on dark plate |
| Browser favicon                  | `favicon-32.svg`                 |

---

## Wordmark typography

The "All for Climbing" wordmark is set in **Archivo Black** (Google Fonts, free, OFL).

- **Display lockup** — title-case, `letter-spacing: -0.5px`, with a `#e85d2a` period.
- **Mono utility** — for tags, log lines, mastheads. JetBrains Mono, `font-weight: 800`, `text-transform: uppercase`, `letter-spacing: 1.5px`. **No period.**

Never re-set the wordmark in another typeface. If Archivo Black is unavailable, use the supplied SVG lockup files instead.

---

## Clear space & minimum size

- **Clear space:** keep one mark-width of empty space on all sides of the lockup. No other text or imagery may enter that zone.
- **Minimum sizes:**
  - Mark only: 16 px (digital), 6 mm (print)
  - Horizontal lockup: 96 px wide
  - Stacked lockup: 64 px wide
  - App icon: 40 px (any smaller and the bolt notch closes up — use the favicon instead)

---

## Don'ts

- Don't recolor the mark to anything other than ink, paper, white, or knockout.
- Don't outline the mark — it's a solid fill, always.
- Don't add drop shadows, glows, or gradients to the mark.
- Don't tilt or rotate the lockup.
- Don't re-set the wordmark in a different typeface.
- Don't fill the negative space inside the bolt notch with a different color.
- Don't put the mark on a busy photo without dimming the photo first.

---

## Using in code

Drop `code/AFCMark.jsx` into your React project:

```jsx
import { AFCMark, AFCLockup } from './AFCMark';

// 1. Mark only (header, watermark)
<AFCMark size={20} />

// 2. App icon style
<AFCMark size={64} color="#fff" bg="#e85d2a" />

// 3. Horizontal lockup
<AFCLockup size={22} />

// 4. Mono utility lockup (tags, mastheads)
<AFCLockup size={14} mono />

// 5. On a dark photo
<AFCLockup size={22} color="#fff" />
```

Or grab the SVG directly: every file in `svg/` is hand-authored, optimized, and safe to inline.

---

## Questions

If a placement isn't covered here, default to: **horizontal lockup in ink at 22 px, on a paper or white surface.** That covers ~80 % of cases. For everything else, open `usage-map.html` and find the closest match.

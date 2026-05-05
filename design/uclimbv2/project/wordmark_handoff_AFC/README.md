# All for Climbing — Wordmark Handoff

The official wordmark for **All for Climbing**. Two-line stacked masthead in Archivo Black, all caps, with an orange period accent.

---

## What's in this folder

```
wordmark_handoff_AFC/
├── README.md                     ← this file
├── preview.html                  ← open in a browser to see every variant + usage
├── svg/
│   ├── wordmark-stack-ink.svg          ← default — on light surfaces
│   ├── wordmark-stack-paper.svg        ← knockout — on dark / photo surfaces
│   ├── wordmark-stack-white.svg        ← pure white type, orange dot — for photo
│   ├── wordmark-stack-mono.svg         ← single-color (ink, no orange dot) — print, embroidery
│   └── wordmark-stack-mono-white.svg   ← single-color white version
├── png/
│   ├── wordmark-stack-ink-1024.png
│   ├── wordmark-stack-paper-1024.png
│   └── wordmark-stack-white-1024.png
└── code/
    └── Wordmark.jsx              ← drop-in React component
```

---

## The wordmark

```
ALL FOR
CLIMBING.
```

- **Typeface:** Archivo Black (Google Fonts, free, OFL)
- **Case:** ALL CAPS
- **Tracking:** `letter-spacing: -0.6px` (tight)
- **Line-height:** `0.96` (lines almost touch)
- **Alignment:** flush left, two lines stacked
- **Accent:** the trailing period is `#e85d2a`. **Always.** It is the only colored element in the default lockup.

> The two-line stack is the **only** primary form. Do not run "ALL FOR CLIMBING" on a single line for headers, app chrome, or marketing surfaces — use the supplied SVG.

---

## Color tokens

| Token   | Hex       | Use |
|---------|-----------|-----|
| Ink     | `#13110e` | Default type color on light surfaces |
| Paper   | `#ece4d6` | Chalky cream background; type color on ink surfaces |
| Accent  | `#e85d2a` | The period. **Never** the type itself |
| White   | `#ffffff` | Type color on photography (pair with ≥35% photo dim) |

**Rules**
1. The wordmark type is **ink, paper, or white**. Never orange.
2. The period is **always orange** in the color lockup. In the mono lockup, the period takes the same color as the type.
3. Don't recolor the type to match a brand partner. Use a neutral surface instead.

---

## Inline variant (single-line)

A second, **tactical** lockup exists for two specific surfaces only:

- **Feed / home top header** — `16 px`
- **Onboarding hero** — `28–36 px`

Files: `wordmark-inline-ink.svg` / `-paper.svg` / `-white.svg` / `-mono.svg`. React: `WordmarkInline.jsx`. Preview: `preview-inline.html`.

Anywhere else, the **two-line stack** remains the lockup. Don't substitute the inline variant for marketing, posters, share cards, or anything where the brand needs presence — it's intentionally smaller and quieter.

---

## Variants — when to use which

### 1. `wordmark-stack-ink.svg` — **DEFAULT**
Ink type on light surfaces. Use everywhere a normal "logo" would go on paper or card backgrounds.
- Feed top header
- Profile / settings nav title
- Email header
- Footer signature

### 2. `wordmark-stack-paper.svg`
Paper type on ink/dark surfaces.
- Dark-mode header
- Footer on dark hero sections
- Newsprint share-card on a black plate

### 3. `wordmark-stack-white.svg`
Pure white type with the orange period. Use **only** on photographic backgrounds with at least 35% dark dim overlay.
- Onboarding splash
- Photo share cards
- Marketing hero with a real photo behind it

### 4. `wordmark-stack-mono.svg` / `wordmark-stack-mono-white.svg`
Single-color, no orange period. Use when the production process can't reproduce two colors.
- Embroidery, screenprint, single-color stamp
- Letterpress / debossed print
- Low-color fax / receipt printing

---

## Sizing & clear space

### Minimum size
- **Digital:** 64 px wide before "CLIMBING." starts to lose density
- **Print:** 18 mm wide

### Clear space
Keep clear space equal to **the cap-height of one line of type** on all four sides. No other text, mark, or imagery may enter that zone.

```
┌──────────────────────────────────────────┐
│   ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   │  ← clear space (cap height)
│   ░░ ALL FOR ░░░░░░░░░░░░░░░░░░░░░░░░░   │
│   ░░ CLIMBING.░░░░░░░░░░░░░░░░░░░░░░░░   │
│   ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   │
└──────────────────────────────────────────┘
```

### Recommended placements & sizes
| Surface                    | Variant               | Size         |
|----------------------------|-----------------------|--------------|
| iOS feed top header        | ink                   | 22 px tall   |
| Profile / nav titles       | ink                   | 22 px tall   |
| Empty-state hero (chat)    | ink                   | 36 px tall   |
| Onboarding splash          | white                 | 56–72 px tall|
| Share card (photo top)     | white                 | 32 px tall   |
| Share card (paper top)     | ink                   | 32 px tall   |
| Email header               | ink                   | 28 px tall   |
| Print poster               | ink or paper          | 80–120 mm    |

---

## Don'ts

- ❌ Don't run on a single line. The stack is the lockup.
- ❌ Don't change the typeface. If Archivo Black is unavailable, use the SVG.
- ❌ Don't tighten or loosen tracking from the supplied values.
- ❌ Don't recolor the type to brand-partner colors.
- ❌ Don't tilt or rotate. The wordmark always sits on a horizontal baseline.
- ❌ Don't drop-shadow or outline the type.
- ❌ Don't replace the orange period with another character (no asterisk, no bullet).
- ❌ Don't right-align or center the two lines. Always flush left.
- ❌ Don't add a tagline beneath. The wordmark stands alone.

---

## Pairing with the app icon

The app icon (`logo_handoff_AFC/svg/icon-orange.svg`) and this wordmark are **two separate assets**. They may co-appear on the same surface (e.g. an app store listing), but **they are never combined into a single lockup**. The wordmark does not need the mountain to be recognizable — that's its job.

When both appear together (rare), give each its own clear space and align them on independent baselines.

---

## Using in code

Drop `code/Wordmark.jsx` into your React project:

```jsx
import { Wordmark } from './Wordmark';

// Default — ink on paper
<Wordmark height={22} />

// Dark surface
<Wordmark height={22} variant="paper" />

// On photography (assumes you've already dimmed the photo)
<Wordmark height={56} variant="white" />

// Print / single-color
<Wordmark height={22} variant="mono" />
```

Or inline the SVG directly — every file in `svg/` is hand-authored, font-rendered, and safe to inline.

> **Font dependency:** the SVGs use `<text>` with `font-family="Archivo Black"`. If your renderer doesn't load Archivo Black, fall back to the PNG exports in `png/`.

---

## Questions

If a placement isn't covered here, default to: **`wordmark-stack-ink.svg` at 22 px tall, on a paper or white surface.** That covers ~80% of cases. For photography, swap to the white variant and dim the photo ≥35%.

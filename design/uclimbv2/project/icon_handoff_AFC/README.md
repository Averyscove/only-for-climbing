# All for Climbing — Icon Handoff

The official app icon for **All for Climbing**. Orange tile (`#e85d2a`) with white mountain + bolt mark.

## Master files

- `svg/icon-squircle.svg` — orange squircle (rx=22), white mark. **Default.**
- `svg/icon-square.svg` — orange square, white mark. (iOS feeds this; system masks.)
- `svg/icon-circle.svg` — orange circle, white mark. (Social profiles.)
- `svg/icon-transparent.svg` — orange mark only, no tile.
- `svg/icon-mono-white.svg` — white mark only.
- `svg/icon-mono-black.svg` — ink mark only.

## iOS — `ios/`

Drop `AppIcon-1024.png` into App Store Connect. The rest map to `Assets.xcassets/AppIcon.appiconset`:

| Idiom | Size (px) | File |
|---|---|---|
| App Store | 1024 | AppIcon-1024.png |
| iPhone @3x | 180 | AppIcon-180.png |
| iPad Pro | 167 | AppIcon-167.png |
| iPad | 152 | AppIcon-152.png |
| iPhone @2x | 120 | AppIcon-120.png |
| Settings @3x | 87 | AppIcon-87.png |
| Spotlight @2x | 80 | AppIcon-80.png |
| iPad legacy | 76 | AppIcon-76.png |
| Misc | 60/58/40/29/20 | AppIcon-{N}.png |

## Android — `android/`

**Adaptive icon** (Android 8+): pair `ic_launcher_foreground.png` + `ic_launcher_background.png` per density. The foreground has the 18dp safe zone baked in (mark scaled to 66%).

**Legacy launcher** (`ic_launcher.png`): pre-baked squircle, used on older devices.

| Density | Folder |
|---|---|
| xxxhdpi | mipmap-xxxhdpi/ |
| xxhdpi | mipmap-xxhdpi/ |
| xhdpi | mipmap-xhdpi/ |
| hdpi | mipmap-hdpi/ |
| mdpi | mipmap-mdpi/ |

Play Store listing: `play-store-512.png`.

## Web / PWA — `web/`

```html
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180.png">
<link rel="manifest" href="/site.webmanifest">
```

`site.webmanifest` icons:
```json
{
  "icons": [
    { "src": "/android-chrome-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/android-chrome-512.png", "sizes": "512x512", "type": "image/png" },
    { "src": "/maskable-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable" }
  ]
}
```

> `favicon.ico`: convert `favicon-32.png` to `.ico` via a tool (e.g. realfavicongenerator.net) — true `.ico` containers can't be written from a browser canvas.

## Social — `social/`

| Platform | File | Notes |
|---|---|---|
| Instagram | instagram-profile-1080.png | Squircle. IG masks to circle on display. |
| Facebook | facebook-profile-1024.png | Pre-circled. |
| X / Twitter | twitter-x-profile-400.png | Pre-circled. |
| LinkedIn | linkedin-profile-400.png | Pre-circled. |
| YouTube | youtube-profile-800.png | Pre-circled. |
| TikTok | tiktok-profile-256.png | Pre-circled. |
| Discord | discord-server-1024.png | Squircle. |
| GitHub | github-org-256.png | Pre-circled. |

## Desktop — `desktop/`

- `macos-1024.png` — squircle. For `.icns`, use `iconutil` on a `.iconset` containing scaled copies.
- `windows-256.png` — square. For `.ico`, use any PNG→ICO converter.

## Color

- Orange tile: **`#e85d2a`** (oklch ~0.65 0.18 40)
- Mark: **`#ffffff`**

## Don'ts

- Don't recolor the tile or mark.
- Don't add gradients, shadows, or bevels to the tile.
- Don't crop the mark — its margins are tuned.
- Don't rotate. The bolt + mountain orientation is fixed.

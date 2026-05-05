# Handoff — uClimb (Bouldering Social App)

## Overview
**uClimb** is an iOS-first social network for boulderers. Users log sends (completed climbs), share achievements, plan group climbs, post stories/posts, and chat in groups. Strava-pattern social fitness, but for V-scale bouldering.

This handoff contains **two design fidelities** for the same product:
- **Wireframes** — low-fi structural exploration
- **Hi-Fi** — polished mockups with real climbing photography

Both share the same screen architecture and the same gritty "chalk + rock + dusk" aesthetic.

## About the Design Files
The HTML files in this bundle are **design references**, built as React-in-HTML prototypes (Babel-transpiled JSX with inline `<script type="text/babel">`). They are **not production code to copy directly**. Your task is to **recreate these designs in a real React + Vite + Tailwind project**, using clean componentization, responsive layout, and placeholder data.

The user has explicitly requested:
> "Convert this into a production-ready React + Vite + Tailwind app. Use clean components, responsive layout, and placeholder data."

So: scaffold a new Vite + React + TS + Tailwind project, recreate every screen as a real component, and use the design files as the visual + interaction spec.

## Fidelity
- **Hi-Fi mockups** — pixel-perfect. Match colors, typography, spacing, and photo composition exactly. Use Tailwind's arbitrary-value syntax (`bg-[#e85d2a]`, `font-['Archivo_Black']`) where the standard scale doesn't fit.
- **Wireframes** — keep them as a Storybook/playground variant if useful, but the hi-fi is the source of truth for visual styling.

## Tech recommendations
- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS v3** with custom theme extensions (see Design Tokens below)
- **react-router-dom v6** for screen navigation
- **lucide-react** for icons (replace the inline SVGs)
- **clsx** or **cva** for conditional classnames
- Mobile-first responsive: design width is **390px** (iPhone 14 Pro). Above 768px, present screens as a centered phone-frame demo with a sidebar nav (matching the design canvas presentation).

## Screen inventory

### 01 · Onboarding (`/onboarding`)
**Purpose**: First-run welcome.
- Full-bleed photo background (outdoor crag), dark overlay (`rgba(13,12,10,0.5)`)
- Logo "uClimb" + orange dot accent (top-left, `Archivo Black 22px`)
- Headline: `FIND YOUR CREW. SEND HARDER.` — `Archivo Black 56px`, line-height 0.92, letter-spacing -2.5px, "CREW." in `#e85d2a`
- Subhead body in `Inter 14px / 1.5` at 80% white
- Primary CTA `CREATE PROFILE →` — solid `#e85d2a`, hard 4×4 black drop-shadow (no border-radius), mono font, uppercase
- Secondary `I ALREADY HAVE AN ACCOUNT` — outline button

### 02 · Feed (`/`)
**Purpose**: Home feed of posts.
Layout:
1. Sticky header (logo + search + bell with unread dot)
2. **Story rail** — horizontally scrollable. Each story = 64×64 avatar with 2.5px conic-gradient ring (live), grade badge underneath. "You" item has + icon in orange.
3. **Achievement post (HERO)** — featured card with:
   - Author header (avatar 38px, name, `@handle`, "Boulder Project · OAK · 2H · CRUSHERS")
   - 340px-tall photo with dim overlay (15%)
   - "SENT ↑" badge top-left in orange w/ hard shadow
   - Video duration top-right (`0:24` w/ play glyph)
   - Bottom-left stat overlay (blurred dark rect): grade, route name, "14 ATTEMPTS · 3 SESH"
   - Caption + hashtags (orange)
   - Action row: heart (filled orange when liked) + count, comment + count, share, bookmark right-aligned
   - One inline comment preview
4. **Event post** — full-bleed photo banner with date/host/title, RSVP avatar pile + "I'M IN" CTA
5. **Session post** — 2:1 photo grid + tags ("2H 14M · 8 PROBLEMS", "NEW PR · V6")

### 03 · Story Viewer (`/story/:id`)
- Full-bleed photo, dark theme
- Top progress bars (5 segments, current at 60%)
- Author header w/ "● LIVE · MOVEMENT DEN"
- Sticker overlays (rotated `±6deg`): orange "PROJECT DAY ✕", white "V9 ATTEMPT #38", location pill
- Bottom: "SEND BETA →" reply input + heart + send buttons

### 04 · Composer / Log a Send (`/compose`)
**Dark theme**. Top bar: CANCEL · NEW SEND · SHARE →
- Selected media preview w/ thumbnail strip + add slot
- Caption input w/ orange hashtag autocomplete + cursor
- "LOG IT AS" panel: V7 grade, route name, gym, "SENT" badge, three stat tiles (ATTEMPTS / STYLE / HOLDS)
- Audience selector: PUBLIC · CRUSHERS · ONLY ME (segmented)

### 05 · Profile (`/u/:handle`)
- 140px banner photo (dim 35%), back + share + more buttons
- Avatar 84px overlapping banner, paper-colored ring (3px padding)
- Name `Archivo Black 22px`, `@handle · OAK CA` mono
- Tag row: "V7 PEAK · OUTDOOR · SINCE '21"
- Bio
- 4-col stat grid (SENDS / SESH / CRAGS / CREW), first col tinted
- Tabs: SENDS / PYRAMID / CRAGS / MEDIA — active tab gets 2.5px orange underline
- **Pyramid chart** — 30-day grade histogram. Each row: grade label + horizontal stacked bar (black=sent, amber=projecting) + counts on right
- Recent sends list: 48px thumb + name (★ FIRST badge if first of grade) + "GYM · 2D" + grade pill

### 06 · Events / Crag (`/crag`)
- Title `CRAG`
- 3-tab segmented: EVENTS / MAP / GYMS
- Filter chips: NEAR ME · THIS WEEK · OUTDOOR · BEGINNER
- Event cards: 88px-wide photo with date stamp overlay (TUE / 27 / APR), title, pin+location, cal+time, host avatar + "12 GOING", "● LIVE" indicator if active

### 07 · Plan a Climb (`/plan/new`)
- Back + "NEW · CLIMB" + POST →
- Hero copy: `LET'S BOULDER / WHAT'S THE PLAN?` w/ blinking orange cursor
- Form rows (label + value with bottom rule): TITLE / GYM / DATE / TIME
- Grade range: V0–V10 chip selector w/ filled range, edges in orange (start/end), middle in black
- Audience: PUBLIC / CREW / CRUSHERS
- Note dashed-border block

### 08 · Map (`/map`)
- Photo background w/ dark overlay (45%)
- SVG topo lines + dashed route between points
- 4 gym pins (square, white bg, 2-letter code) + active orange glow ring
- User location dot (orange + halo)
- Bottom selected-gym card: 64px thumb + name + "2.4 MI · OAK · OPEN ‘TIL 11P" + tags

### 09 · Chat list (`/chat`)
- Title `CHAT` + new-chat orange button
- Search bar
- Chat rows:
  - Group: stacked-avatar pair (30px each, offset)
  - 1:1: 44px avatar; story ring if unseen story; green online dot
  - Right side: time + unread count badge (orange, mono)

### 10 · Group Thread (`/chat/:id`)
- Header: back + 3-stacked avatars + "CRUSHERS CREW · ● 4 ACTIVE · 7 MEMBERS" + more
- Date divider `━ TUE 4:12 PM ━` mono uppercase
- Messages: 26px avatar + author/time label + message bubble (off-white card, 1px ruled border, no radius)
- **Embedded send card** — 220px wide dark card with photo + grade + route info, sharable in chat
- Reaction chips below message: `🔥 4` `💪 2`
- My messages: orange bubble, right-aligned, hard 2×2 burnt-orange shadow
- Typing indicator: avatar + dot pulse + "JULES IS TYPING"
- Composer: camera + input + orange send

### Hero · Achievement Share Cards (3 directions)
- **A · Stamped Certificate** — light paper, red wax-stamp "★ FIRST V7 ★" rotated, big V7 + "SENT", 3-col stat grid, QR code footer
- **B · Editorial Full-Bleed** — full photo, MASSIVE V7 (220px) in orange w/ hard offset shadow, route name, attempts/sessions/project line, author footer
- **C · Daily Newspaper** — broadsheet masthead, headline-style "KAUR CRACKS BLOOD ORANGE", 2-col grid (photo + stats), 2-column body copy, dateline footer

## Interactions & Behavior
- **Tab bar**: 5 items (Feed / Crag / +Post / Chat / Me). Center + button is elevated FAB-style (52px circle, orange w/ glow). Active tab in ink color, inactive in `#9a907f`.
- **Like animation**: heart fills with orange + scale bounce. Increment count optimistically.
- **Story progression**: tap right = next, tap left = previous, hold = pause. 5s per story.
- **Send composer**: photo/video picker → grade selector wheel → "SHARE" generates one of the three share cards (user picks template) and posts to feed.
- **Group chat embedded sends**: tapping the send card opens the achievement detail screen.
- **Pyramid bars**: animate width from 0 on mount (350ms ease-out).

## State management
Use **Zustand** (lightweight) or React Context. State slices:
- `auth` — current user
- `feed` — posts list, infinite scroll cursor
- `chat` — threads list, active thread messages, typing state
- `events` — upcoming events, RSVPs
- `composer` — draft (media, grade, route, gym, caption, audience)

Use **TanStack Query** for any future server data; for the handoff, hard-coded placeholder data in `src/data/mock.ts` is fine.

## Design Tokens

### Colors
```ts
// tailwind.config.ts → theme.extend.colors
{
  paper:    '#ece4d6',  // primary background
  paper2:   '#e2d9c8',  // tinted card
  card:     '#f6efe1',  // off-white card
  ink:      '#13110e',  // primary text / heavy borders
  ink2:     '#2c2823',
  ink3:     '#5e564b',  // secondary text
  ink4:     '#9a907f',  // disabled / faint
  rule:     '#1a1714',  // hard rule
  ruleSft:  '#bfb4a0',  // soft rule
  accent:   '#e85d2a',  // chalk orange (primary)
  accent2:  '#c43c0c',  // burnt orange (shadow)
  amber:    '#d49323',  // projects
  moss:     '#3d6e3a',  // online dot
  blood:    '#7a1a0c',  // stamp red
  dark:     '#13110e',  // dark surface
  dark2:    '#1f1b16',
}
```

### Typography
```ts
// tailwind.config.ts → theme.extend.fontFamily
{
  display: ['"Archivo Black"', 'Inter', 'system-ui', 'sans-serif'],
  sans:    ['Inter', 'system-ui', 'sans-serif'],
  mono:    ['"JetBrains Mono"', 'ui-monospace', 'Menlo', 'monospace'],
}
```
Load via `<link>` in `index.html`:
```
https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700;800&display=swap
```

### Spacing / radius
- App is **square-ish**: most cards have `border-radius: 0–4px`. Avoid pill-shaped containers except for chips & the FAB.
- Borders are **chunky**: `1.5–2.5px solid ink` is common.
- "Hard shadow" pattern: `box-shadow: 4px 4px 0 var(--ink)` — use a Tailwind plugin or arbitrary `shadow-[4px_4px_0_#13110e]`.

### Texture
The mockups use a paper-noise SVG overlay (multiply blend, ~16% opacity). Recreate as a fixed-position layer in `<App>`:
```tsx
<div className="fixed inset-0 pointer-events-none mix-blend-multiply opacity-55 z-50"
     style={{ backgroundImage: 'url(/noise.svg)', backgroundSize: '220px 220px' }}/>
```
SVG source is in `hifi/shared.jsx` — search for `HF_NOISE`.

## Assets
- **Photography**: Unsplash (free tier). URLs in `hifi/shared.jsx` → `HF_IMG`. For production, download these and host yourself, or pipe through your CDN. Have a fallback gradient for failed loads.
- **Avatars**: Unsplash portraits keyed by name (`mara`, `jules`, `ben`, etc.) in `HF_IMG`.
- **Icons**: replace the inline SVGs (`HFIcon.*` in `hifi/shared.jsx`) with `lucide-react` equivalents — most have direct matches: Plus, Search, Bell, Heart, MessageCircle, Share2, Bookmark, MapPin, Calendar, ArrowLeft, ArrowRight, MoreHorizontal, Send, Camera, Play, Flame, Home, MessageSquare, User, Trophy.

## Recommended file structure
```
src/
  components/
    ui/           # Button, Tag, Grade, Avatar, IconButton (atoms)
    feed/         # Post, AchievementPost, EventPost, SessionPost, StoryRail
    chat/         # ChatRow, MessageBubble, EmbeddedSend, Composer
    profile/      # Pyramid, RecentSends, StatGrid
    events/       # EventCard, FilterChips
    share/        # ShareCardA, ShareCardB, ShareCardC
    layout/       # PhoneFrame, TabBar, Header
  pages/
    Feed.tsx, Story.tsx, Compose.tsx, Profile.tsx,
    Crag.tsx, Plan.tsx, Map.tsx, Chat.tsx, Thread.tsx, Onboarding.tsx
  data/mock.ts    # placeholder users, posts, events, threads
  styles/index.css
  App.tsx, main.tsx
tailwind.config.ts
vite.config.ts
```

## Files in this bundle
- `uClimb Wireframes.html` — low-fi reference
- `uClimb Hi-Fi.html` — primary visual spec
- `hifi/shared.jsx` — design tokens, atoms, icons, image sources
- `hifi/feed.jsx`, `hifi/profile.jsx`, `hifi/events.jsx`, `hifi/chat.jsx`, `hifi/share.jsx`, `hifi/extras.jsx` — screen implementations
- `screens/*.jsx` — wireframe-fidelity equivalents
- `ios-frame.jsx` — phone bezel component (decorative — drop in production)
- `design-canvas.jsx` — multi-artboard presentation shell (drop in production)

## Out of scope (for the recreation)
- The design-canvas pan/zoom shell — not needed in the real app
- The iOS device frame — not needed; use mobile-first CSS instead
- Babel inline transpilation — replaced by Vite

## Open questions for the dev
- Backend? Assume REST + JSON for now; mock with MSW if you want fetchable endpoints.
- Real video playback or just thumbnails? The designs imply video — `<video>` w/ poster is fine.
- Push notifications, deep links, share-sheet integration — defer to platform layer.

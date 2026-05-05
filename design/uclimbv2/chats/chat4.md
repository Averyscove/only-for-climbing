# Header Logo Update

_Started 2026-04-30 23:10 UTC_

---

## User

hello

## Assistant

## User

hey so i want you to just modify the header logo with the following(the logo that is on the top of most places. 

Also, the image on the onboarding is not climbing related so i'd like to change that. Would also be nice if the characters for the profiles were more clmbing related.

## Assistant

I'll start by exploring the project to understand what we're working with.

_[tool: list_files]_

_[tool: read_file]_

_[tool: list_files]_

_[tool: grep]_

Let me find the header logo and onboarding image.

_[tool: grep]_

_[tool: grep]_

Let me look at the relevant files to understand the current header logo, onboarding image, and avatars.

_[tool: read_file]_

_[tool: read_file]_

Let me find where the header logo (AFCLockup) is used in headers, and check the feed for the header treatment.

_[tool: grep]_

_[tool: read_file]_

_[tool: snip]_

The user wants me to:
1. Update the header logo (used in feed.jsx, share.jsx, and onboarding) — they uploaded a wordmark "ONLY FOR CLIMBING." in Archivo Black. Since the project is "uClimbv2" and they have an "All for Climbing" lockup, but they uploaded "ONLY FOR CLIMBING" — that's the change they want.
2. Replace the onboarding photo with one that's actually climbing-related.
3. Make profile avatars more climbing-related (people who look like climbers, e.g., on walls, with chalk, etc.).

Let me update the AFCLockup wordmark to "Only for Climbing." and swap the photos.

_[tool: str_replace_edit]_

Now I'll update the aria-label on the AFCMark, and swap onboarding photo + climbing-related avatars. Let me also tweak the SVG mark slightly so it reads more climbing-focused (the existing mountain/bolt is fine, just update the label), and replace the avatar URLs with climber-flavored images.

_[tool: str_replace_edit]_

_[tool: snip]_

Now let me check the onboarding photo. The current `outdoor1` URL is supposed to be an outdoor boulderer — let me verify it's actually climbing-related, and pick a better one for onboarding specifically.

_[tool: show_html]_

Let me swap the onboarding image to something definitively climbing-related (a climber on a wall) and also tighten the wordmark size since "Only for Climbing." is shorter than "All for Climbing." — actually they're the same length. Let me update the onboarding photo:

_[tool: str_replace_edit]_

Now let me view the result.

_[tool: done]_

Updated:

- **Header logo** — wordmark in the `AFCLockup` is now "Only for Climbing." (used in feed header, share cards, and onboarding).
- **Onboarding image** — swapped from a generic outdoor shot to an actual climber-on-the-wall photo.
- **Profile avatars** — replaced the stock face portraits with climbing-flavored shots (climbers on walls, chalked hands, bouldering, gym candids) so Mara/Jules/Ben/Ari/Tomo/Nat/You/Finn all read as climbers.

_[tool: fork_verifier_agent]_

Quick note — the lockup component is still named `AFCLockup`/`AFCMark` internally; happy to rename to `OFCLockup`/`OFCMark` if you'd like the code to match the new brand.

## User

Verifier agent check completed

## Assistant

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Fixed:
- **Ari avatar** — swapped to a verified chalked-hands photo, no more 404.
- **Onboarding photo** — switched to `send1` (bouldering overhang), which clearly shows a climber on the wall.

_[tool: done]_

_[tool: fork_verifier_agent]_

Both issues addressed.

## User

Yeah so everywhere where you see the Only for climbing logo, we need to swich with this logo.

## Assistant

_[tool: snip]_

_[tool: read_file]_

This SVG is exactly the same wordmark we already have ("ONLY FOR CLIMBING." in Archivo Black, ink + orange dot). The difference is it's a **wordmark only** — no mountain/bolt mark next to it.

So you want the lockup to drop the mark and be just the wordmark. Let me update `AFCLockup` to render only the text.

_[tool: read_file]_

The SVG uses uppercase "ONLY FOR CLIMBING." with an orange period — let me swap the lockup to that treatment (no mark, uppercase wordmark in display face).

_[tool: str_replace_edit]_

Now I should also handle the places where `AFCMark` is used inline next to the wordmark in share.jsx — those small marks should be removed too since the brand is now wordmark-only. Let me check those.

_[tool: read_file]_

_[tool: read_file]_

Let me update the URL string and the daily-vol header in share.jsx to match the new brand name, and remove the small AFCMark icons in those spots:

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Now let me also reduce the size used in the feed header since the wordmark is wider than the old mark+wordmark (size=20 was for the icon size; the text scaled to ~14.4px). The new lockup uses size as text size proxy with multiplier 0.82, so we want fontSize ~13–14 for the feed header. Let me check if size=20 looks right (gives ~16px font). Actually that's a touch large for the small phone header. Let me check the rendered result:

_[tool: done]_

Logo swapped everywhere:

- **`AFCLockup`** is now the wordmark only — "ONLY FOR CLIMBING." in Archivo Black, all caps, ink with the orange period. Mountain-bolt mark is gone from the lockup.
- **share.jsx** — small inline marks beside "Only for Climbing Daily · Vol XII" and the share URL also dropped; URL updated to `onlyforclimbing.app/mara`.

Used everywhere `AFCLockup` was already wired up (feed header, onboarding, all share-card variants), so it propagates automatically.

_[tool: fork_verifier_agent]_

Done.


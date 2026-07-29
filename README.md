# Merkle XEN — links page

A single-page links hub, in the style of Linktree. One column of links,
nothing else. Plain HTML/CSS/JS — no build step, no dependencies.

```
index.html          the page (and the logo lockup)
assets/links.js     ← the only file you edit to add links
assets/styles.css   look and feel
assets/app.js       renders the page from links.js
```

## Adding a link

Open `assets/links.js` and add a block to the `LINKS` list:

```js
{
  title: "What it is",
  description: "One short line",   // optional
  url: "https://…",
  tag: "Toolkit",                  // optional pill on the right
  accent: "cobalt",                // cobalt | purple | blue | red | grey
  badge: "New",                    // optional sticker — use sparingly
},
```

`accent` sets the colour the row flips to on hover. Order in the list is the
order on the page. Save, refresh, done.

## Changing the wording

The `PROFILE` object at the top of `assets/links.js` holds the headline,
tagline, footer copy, email and social links. A `\n` in `headline` forces a
line break on wide screens; narrow screens ignore it and wrap on their own.

## The logo

`assets/logo.svg` is the official Merkle XEN Tools lockup. To swap it, drop a
new file in at that path — nothing else needs to change.

The only edit made to the export was its `viewBox`, tightened from
`0 0 1027 408` to the artwork's own bounds (`95 89 828 229`) so it can be
sized by width without carrying ~90px of empty margin. The paths are untouched.

The lockup's wedge is `#0328D1`; the page uses the design system's cobalt
`#2041CE` for its blue field.

## Running it

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

## Publishing

Any static host works. For GitHub Pages: **Settings → Pages → Deploy from a
branch**, pick the branch and the `/ (root)` folder.

Work Sans loads from Google Fonts, with a system sans fallback if it's blocked.

## A note on design

Flat colour blocking, cobalt and ink, Work Sans — the palette and type come
from the XEN brand so the page sits next to the rest of it. It deliberately
does **not** follow the print design system
(`XEN-LAB-Event-Print-Design-System.md`); that governs posters and collateral,
not this page.

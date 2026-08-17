# Minimal Dark Redesign — Design Spec

**Date:** 2026-08-17
**Status:** Approved, pending implementation plan
**Scope:** Full visual redesign of all sections. No content or data-model changes beyond the bug fixes listed in §8.

---

## 1. Goal

Replace the "Midnight Neon" theme with a restrained, minimal dark system. The background stays dark. The three saturated neon accents are replaced by a near-monochrome cool slate palette with a single muted accent used sparingly.

Success criteria:

1. Exactly one accent hue exists in the codebase, used no more than five times per viewport.
2. All color values come from semantic tokens. Zero hardcoded hex literals in JSX.
3. Every text/background pairing meets WCAG AA (4.5:1 normal, 3:1 large); every interactive border meets 3:1.
4. No two adjacent sections share the same alignment and background band.
5. No glow, gradient text, marquee, float loop, blink, or hover-scale remains.

Non-goals: light mode, content rewrites, CMS integration, new sections.

---

## 2. Current-state problems

| # | Problem | Evidence |
|---|---|---|
| 1 | Three max-saturation accents used simultaneously | `#ff2d78` / `#8b2cff` / `#00e5ff` as a tri-gradient on name, every h2, primary button, dividers, badges |
| 2 | Colors not tokenized | ~60 inline hex literals in JSX; `--neon-*` vars declared in `globals.scss` but ignored by components |
| 3 | Hover state driven by JS | `onMouseEnter` / `onMouseLeave` assigning `style.border` directly in `skills/index.jsx` |
| 4 | Monospace used for headings | Section h2, skill labels, and eyebrow text all `font-mono` |
| 5 | Effect density | Glow shadows, `backdrop-filter`, `heroFloat`, blinking cursor, marquee, `hover:scale-110`, `translateY(-2px)` stacked |
| 6 | Skills section unscannable | Auto-scrolling marquee; 15 skills flattened with no grouping |
| 7 | Structural monotony | All seven sections use the same centered eyebrow → gradient h2 → divider stack |
| 8 | Code-editor motif repeated 3× | Hero, projects, and about |
| 9 | `tailwind.config.js` is dead code | Tailwind v4.1.18 uses CSS-first config and does not read it without `@config`. Container padding, gradient utilities, and the `extend`-nested-in-`extend` `4k` breakpoint have never applied |

Consequence of #9: every section hand-rolls `mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]` because no working container exists.

---

## 3. Token layer

Defined once in `app/css/globals.scss` using Tailwind v4's `@theme` block, so each token becomes a real utility (`bg-surface`, `text-hi`, `border-line`). Names are semantic, not literal — a future retheme changes these values only.

```css
@theme {
  --color-bg:            #0B0C0E;  /* page */
  --color-surface:       #131519;  /* cards, raised panels */
  --color-sunken:        #08090B;  /* alternating section bands */

  --color-line:          #23262C;  /* decorative hairlines */
  --color-line-strong:   #32363D;  /* hover / active borders */
  --color-line-input:    #5A5F66;  /* form inputs, focusable controls */

  --color-hi:            #E6E8EB;  /* headings */
  --color-mid:           #9BA1A8;  /* body */
  --color-low:           #767C84;  /* meta, captions, timestamps */

  --color-accent:        #7C9CC4;  /* links, active nav, primary CTA */
  --color-accent-hover:  #93AFD2;
  --color-accent-dim:    rgb(124 156 196 / 0.12);  /* focus rings, subtle fills */
}
```

`tailwind.config.js` is deleted. The container becomes a utility class defined alongside the tokens: `max-width: 1100px`, centered, `padding-inline: 1.5rem` mobile / `3rem` at `lg`.

### Contrast verification

Computed against `#0B0C0E` (relative luminance 0.00366) using the WCAG 2.x formula.

| Token | Value | Ratio on `bg` | Requirement | Result |
|---|---|---|---|---|
| `hi` | `#E6E8EB` | 15.9:1 | 4.5:1 | Pass |
| `mid` | `#9BA1A8` | 7.5:1 | 4.5:1 | Pass |
| `low` | `#767C84` | 4.65:1 | 4.5:1 | Pass |
| `accent` | `#7C9CC4` | 6.9:1 | 4.5:1 | Pass |
| `line-input` | `#5A5F66` | 3.04:1 | 3:1 (non-text UI) | Pass |
| `line` | `#23262C` | 1.29:1 | none (decorative) | Exempt |
| `line-strong` | `#32363D` | 1.61:1 | none (decorative) | Exempt |

`bg` text on the `accent` primary button is also 6.9:1.

Two constraints follow from this table and must hold during implementation:

- `low` is at 4.65:1 with little headroom. It must not be placed on `surface` (`#131519`) without re-verification — the lighter background reduces the ratio.
- `line` and `line-strong` are decorative only. Any border that conveys state or bounds a control (form inputs, focusable elements) uses `line-input`.

---

## 4. Typography

Bricolage Grotesque for headings, Hanken Grotesk for body — both already loaded in `layout.js`. Monospace is restricted to genuine code.

| Role | Family | Size / leading | Tracking | Color |
|---|---|---|---|---|
| Display | Bricolage | 60px / 1.05 (40px mobile) | -0.02em | `hi` |
| Section h2 | Bricolage | 32px / 1.15 | -0.01em | `hi` |
| Card title | Bricolage | 20px / 1.3 | normal | `hi` |
| Body | Hanken | 17px / 1.65, max 68ch | normal | `mid` |
| Small | Hanken | 14px / 1.5 | normal | `mid` |
| Eyebrow / meta | Hanken | 12px, uppercase | 0.12em | `low` |
| Code | Mono | 13px / 1.6 | normal | `mid`, keys in `accent` |

No gradient text anywhere. Hierarchy comes from size, weight, and color step only.

---

## 5. Motion policy

An explicit budget, because unbudgeted motion is how the current design accumulated.

**Allowed**
- `opacity` and `transform` transitions ≤200ms on hover
- `border-color` transitions ≤150ms
- One fade-up per section on scroll-in, ≤150ms stagger between children

**Removed**
- Glow `box-shadow` (all instances)
- `heroFloat` infinite loop
- `heroBlink` cursor
- `react-fast-marquee` (dependency dropped from `package.json`)
- `hover:scale-110`
- `backdrop-filter: blur`
- All JS `onMouseEnter` / `onMouseLeave` style handlers

All motion wrapped in `@media (prefers-reduced-motion: reduce)`, which disables transitions and animations.

**Elevation:** no shadows at all. Depth is a 1px `line` border plus a one-step background change (`bg` → `surface`).

**Spacing:** section padding 96px mobile / 128px desktop. Content max-width 1100px. Prose max-width 46–68ch.

---

## 6. Section rhythm

### Section header pattern

Applied to all six numbered sections, replacing the centered eyebrow / gradient h2 / centered divider:

```
01 ── EXPERIENCE ──────────────────────────────────────────
   ↑ 12px   ↑ 12px uppercase,        ↑ 1px line, flex-1
   low       mid, 0.12em tracking      fills remaining width

Ten years of WordPress and frontend work
   ↑ 32px Bricolage, hi
```

Left-aligned. The rule is a flex child that consumes remaining width.

### Layout map

| # | Section | Band | Alignment | Layout |
|---|---|---|---|---|
| — | Hero | `bg` | Left, asymmetric | Full-height statement, no card |
| 01 | Experience | `sunken` | Left | Full-width rows, hairline dividers |
| 02 | Skills | `bg` | Left | Four grouped typographic columns |
| 03 | Projects | `sunken` | Left | Large numbered entries, stacked |
| 04 | About | `bg` | Centered | Narrow prose, 60ch — the only centered section |
| 05 | Blog | `sunken` | Left | Three-column card grid |
| 06 | Contact | `bg` | Split | Form left, details right |

Alternating `bg` / `sunken` bands replace glow dividers as the section separator.

### Hero

```
Available for remote work          12px low, no pill or badge

Sabbir Ahmed                       60px Bricolage, hi, no gradient

WordPress & Frontend Engineer
building custom themes, WooCommerce
systems, and Elementor tooling.    17px mid, max 46ch

[ View work ]   Download resume    primary button + plain text link

GitHub  LinkedIn  X                14px text links, not icon circles
```

The `developer.js` code card is removed from the hero. Social icon circles become text links.

### Experience (01)

Three roles rendered as a table-like list, not cards:

```
2015 — Present    WordPress Developer                 Pixiefy
──────────────────────────────────────────────────────────────
2019 — Present    Elementor & WooCommerce Developer   Freelance
──────────────────────────────────────────────────────────────
2021 — Present    Frontend Web Engineer               Agency
```

Duration left in `low`, title in `hi`, company right-aligned in `mid`. On mobile the row stacks: duration, then title, then company.

Requires stripping the parentheses currently stored in `experience.js` (`"(2015 - Present)"`) at render time, or normalizing the data. Normalize the data — the parentheses are presentation, not content.

### Skills (02)

Replaces the marquee with four grouped typographic columns. Grouping is what communicates depth; a flat list of fifteen logos does not.

```
WORDPRESS & PHP      FRONTEND        TOOLING & INFRA    DESIGN
───────────────      ────────        ───────────────    ──────
WordPress            JavaScript      Git                Figma
WooCommerce          React           Docker             Photoshop
Elementor            Next.js         Nginx
Custom Themes        HTML / CSS      MySQL
Plugin Development   Tailwind        REST API
PHP                  GSAP
```

Group heading 12px uppercase `low`; items 15px `mid`. Four columns at `lg`, two at `sm`, one on mobile. No icons, no images, no hover state.

This requires restructuring `utils/data/skills.js` from a flat array into grouped objects:

```js
export const skillGroups = [
  { name: 'WordPress & PHP', items: [...] },
  { name: 'Frontend',        items: [...] },
  { name: 'Tooling & Infra', items: [...] },
  { name: 'Design',          items: [...] },
];
```

`utils/skill-image.js` and the `DARK_ICONS` list become unused and are deleted.

### Projects (03)

Numbered editorial entries replacing the fake code windows:

```
01                                        WordPress Plugin Developer
Custom WordPress Plugin Development
Built a fully custom WordPress plugin with organized architecture
including Elementor widget registration, admin settings pages…

WordPress · PHP · Elementor · WooCommerce · AJAX · JavaScript · MySQL
──────────────────────────────────────────────────────────────────────
```

Index in `low`, role right-aligned in `low`, name 20px `hi`, description `mid` clamped to three lines, tools 13px `low` joined by `·`.

`code` and `demo` are empty strings for all four projects. The link row renders only when a non-empty URL exists — no dead affordances.

### About (04)

The only centered section. Prose at 60ch, 17px `mid`. The code-card wrapper is removed.

The profile image is retained — `personalData.profile` is consumed at `about/index.jsx:40`. It renders as a single 160px square with a `1px line` border, `radius 8px`, and no glow or gradient ring. `layout.js` continues to reference `/profile.png` for OG metadata; that path is unchanged.

### Blog (05)

Three-column grid of the standard card (§7). Image 16:9 with `object-cover`, title 20px `hi` clamped to two lines, date 12px `low`, excerpt 14px `mid` clamped to three lines.

Excerpt text must be decoded before render — the WP API returns pre-escaped HTML, so entities currently display raw (`customer&#8217;s`). Decode entities in the excerpt path.

### Contact (06)

Split layout: form left, contact details right. Inputs use `surface` background with `1px line-input` border, `hi` text, `low` placeholder. Focus is a 2px `accent-dim` ring. Submit uses the primary button.

---

## 7. Component patterns

**Card** — one definition, used by blog only.
`bg-surface`, `1px border-line`, `radius 8px`, no shadow. Hover changes `border-color` to `line-strong` over 150ms. No lift, no scale, no glow.

**Buttons** — exactly two variants.
- Primary: solid `accent`, `bg` text, radius 6px, 14px medium. Hover `accent-hover`. Maximum one per viewport.
- Secondary: transparent, `1px border-line`, `mid` text. Hover `border-line-strong` + `hi` text.

**Links** — `accent`, no underline at rest, `text-decoration: underline` on hover. Focus 2px `accent-dim` ring. `outline: none` without a replacement indicator is prohibited.

**Nav** — 64px tall, `bg` at 92% opacity, `1px` bottom `line`. Items 14px `mid`; active item `hi` with a 1px `accent` bottom border. The bordered CONTACT pill becomes the secondary button. The gradient wordmark becomes plain `hi` text.

**Footer** — one line: name left, three text links right, `1px` top `line` border.

**Scroll-to-top** — circular gradient button becomes a square `surface` button with `1px line` border and a `mid` chevron.

---

## 8. Bug fixes included

These are defects in code the redesign touches, fixed as part of it.

1. **`app/components/homepage/projects/single-project.jsx:5`** destructures `tags`, but `utils/data/projects-data.js` supplies `tools`. `tags` is always `undefined`, so every card renders an empty `tech: []` despite populated data. Fix by reading `tools`.
2. **`app/components/homepage/education/`** is unused — not imported by `page.js` — and imports `@/utils/data/educations` while the actual file is `education.js` and is empty. Delete the component and the empty data file.
3. **`tailwind.config.js`** is not read by Tailwind v4 and contains an `extend` nested inside `extend`. Delete it; move theme configuration into `@theme`.
4. **Blog excerpts render raw HTML entities** (`&#8217;`) because pre-escaped WP API output is escaped again by React. Decode entities in the excerpt path.
5. **`experience.js` durations** embed presentational parentheses (`"(2015 - Present)"`). Normalize to `"2015 — Present"`.

---

## 9. Files affected

**Deleted** — each verified unused after this redesign:

| Path | Justification |
|---|---|
| `tailwind.config.js` | Not read by Tailwind v4; superseded by `@theme` |
| `app/components/homepage/education/` | Not imported by `page.js` |
| `utils/data/education.js` | Empty; only consumer is the deleted education section |
| `utils/skill-image.js` | Sole consumer is `skills/index.jsx`, which drops icons |
| `app/assets/svg/skills/` | Reached only via `utils/skill-image.js` |
| `app/components/helper/glow-card.jsx` | Sole consumers are education (deleted) and experience (becomes a table). Also drives its glow through `document.querySelectorAll` + mousemove — the JS-styling pattern §5 removes |

**Rewritten:** `app/css/globals.scss`, `app/css/card.scss`, the six remaining `app/components/homepage/*/index.jsx`, `app/components/navbar.jsx`, `app/components/footer.jsx`, `app/components/helper/scroll-to-top.jsx`, `app/components/homepage/projects/single-project.jsx`, `app/components/homepage/blog/blog-card.jsx`, `app/components/homepage/contact/contact-form.jsx`

**Modified:** `utils/data/skills.js` (restructured into groups), `utils/data/experience.js` (duration format), `package.json` (drop `react-fast-marquee`), `app/blog/page.js`

**Unchanged:** all API routes, `layout.js` metadata, `utils/data/personal-data.js`, `utils/data/projects-data.js`

---

## 10. Verification

1. Every token pairing re-checked against §3 after implementation.
2. `grep -rE '#[0-9a-fA-F]{6}' app/components/` returns no matches.
3. `grep -rn 'onMouseEnter\|onMouseLeave' app/` returns no matches.
4. `grep -rn 'marquee\|heroFloat\|heroBlink\|backdrop-filter\|box-shadow' app/` returns no matches.
4. Keyboard tab traversal shows a visible focus indicator on every interactive element.
5. Rendered at 375px, 768px, 1280px, and 1920px with no horizontal overflow.
6. `prefers-reduced-motion: reduce` disables all transitions and animations.
7. Dev server console clean; no hydration warnings.

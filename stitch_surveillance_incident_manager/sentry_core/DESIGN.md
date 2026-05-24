# Design System Document: Surveillance Incident Management

## 1. Overview & Creative North Star: "The Digital Sentinel"

This design system is built upon the **Creative North Star: The Digital Sentinel.** 

In the high-stakes world of surveillance incident management, "standard" UI is a liability. We must move beyond the generic "admin dashboard" aesthetic to create an environment that feels authoritative, impenetrable, and surgically precise. This system rejects the cluttered, line-heavy interfaces of legacy security software. Instead, it adopts a **High-End Editorial** approach—utilizing bold typographic scales, intentional asymmetry, and deep tonal layering to guide the eye toward critical data points.

The experience is defined by "Commanding Clarity." We prioritize information density without sacrificing breathing room, ensuring that in a moment of crisis, the interface acts as a silent, sophisticated partner.

---

## 2. Colors & Surface Architecture

The palette is anchored in deep charcoals and precision blues, evoking a sense of midnight vigils and digital fortitude.

### The "No-Line" Rule
To achieve a premium, custom feel, **1px solid borders are strictly prohibited for sectioning.** Boundaries must be defined through background color shifts or subtle tonal transitions. Use `surface-container-low` for secondary sections and `surface` for the primary canvas.

### Surface Hierarchy & Nesting
We treat the UI as a series of physical layers—stacked sheets of tinted glass and fine administrative paper.
*   **Base:** `surface` (#f6fafe) – The primary canvas.
*   **Level 1 (Nesting):** `surface-container-low` (#f0f4f8) – Use this for sidebar containers or secondary navigation panels.
*   **Level 2 (Active Focus):** `surface-container` (#eaeef2) – For main content areas.
*   **Level 3 (Interactive Elements):** `surface-container-highest` (#dfe3e7) – For modals or elevated pop-overs.

### The "Glass & Gradient" Rule
To prevent a flat, "out-of-the-box" appearance, floating elements (like command palettes) should utilize **Glassmorphism**: 
*   **Token:** `primary-container` (#1e293b) at 85% opacity with a `20px` backdrop-blur.
*   **Signature Texture:** Main Action CTAs should use a subtle linear gradient from `primary` (#091426) to `primary-container` (#1e293b) at a 135-degree angle to provide a "machined metal" depth.

---

## 3. Typography

The typography strategy leverages the interplay between **Public Sans** (for authoritative headlines) and **Inter** (for high-readability data).

*   **Display & Headline (Public Sans):** These are the "anchors." Use `display-md` for high-level incident metrics to convey a sense of scale and urgency. 
*   **Title & Body (Inter):** The "workhorse." `title-sm` is used for incident labels, while `body-md` handles the primary narrative of incident reports. 
*   **Labels (Inter):** `label-md` and `label-sm` should be used for metadata (timestamps, camera IDs). These should often be in all-caps with a 0.05em letter-spacing to reinforce the administrative, "official" tone.

---

## 4. Elevation & Depth

We eschew traditional "drop shadows" in favor of **Tonal Layering.**

*   **The Layering Principle:** Depth is achieved by placing a `surface-container-lowest` card on top of a `surface-container-low` background. The color shift creates the "lift."
*   **Ambient Shadows:** For critical floating notifications, use an extra-diffused shadow: `0px 20px 40px rgba(9, 20, 38, 0.06)`. This shadow uses a tint of the `on-surface` color to feel natural and integrated.
*   **The "Ghost Border" Fallback:** If accessibility requires a container edge, use the `outline-variant` (#c5c6cd) at **15% opacity**. Never use a 100% opaque border.

---

## 5. Components

### Buttons
*   **Primary:** Gradient of `primary` to `primary-container`. Corner radius: `md` (0.375rem). Use `on-primary` for text.
*   **Secondary:** Ghost-style. No background. `outline-variant` ghost border (20% opacity). Text in `secondary` (#006591).
*   **Tertiary:** Text-only, `label-md` bold, color: `on-surface-variant`.

### Cards & Lists (Incident Feeds)
*   **No Dividers:** Forbid the use of line-separators. Separate incident entries using `8px` of vertical white space and a subtle background shift to `surface-container-low` on hover.
*   **Intentional Asymmetry:** In a list item, right-align the timestamp using `label-sm` and left-align the Incident ID using `title-sm` to create a sophisticated, editorial "ragged" edge.

### Surveillance Chips
*   **Action Chips:** Used for "Assigning" or "Escalating." Use `secondary-container` (#39b8fd) with `on-secondary-container` (#004666) text. Shape: `full`.

### Input Fields
*   **Style:** Minimalist. No bottom line. Fill with `surface-container-highest` at 40% opacity. 
*   **Focus State:** A 2px signature glow using `secondary` (#0ea5e9) but restricted to a "soft pulse" rather than a hard border.

### Contextual Components for Surveillance
*   **The Incident Timeline:** A vertical track using `outline-variant` at 10% opacity. Events are marked by `primary` dots that "glow" using a `secondary` ambient shadow when active.
*   **Video Feed Container:** Edge-to-edge within its container. Use `xl` (0.75rem) corner radius to soften the technical feed and make it feel like a modern curated gallery.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical layouts for dashboards; place key metrics on a large `surface-container-lowest` hero area and secondary feeds on a narrower `surface` sidebar.
*   **Do** prioritize "Tonal Depth" over lines. If a section feels messy, increase the spacing rather than adding a border.
*   **Do** use `secondary` (#0EA5E9) sparingly as a "surgical" accent for active states or critical alerts only.

### Don't:
*   **Don't** use 100% black. The deepest "black" in this system is `primary` (#091426), which maintains a professional blue-charcoal tint.
*   **Don't** use "Default" shadows. If a component looks like it's "floating" on a generic cloud, the blur is too small and the opacity is too high.
*   **Don't** use dividers. If you feel the need to separate two items, use a `16px` or `24px` gap from the spacing scale.
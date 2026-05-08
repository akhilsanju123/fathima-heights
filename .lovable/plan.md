
# Holy Fathima High School — Website Plan

A premium, fully responsive multi-page school site inspired by akshara.edu.in's structure but with a unique blue + white + gold identity drawn from the school's logo.

## Brand & Design Direction

- **Palette**: Royal blue `#1e3a8a` (primary), deep navy `#0f1e4d`, warm gold `#d4a64a`, ivory white `#fdfcf8`, soft sky for accents.
- **Typography**: Playfair Display (headings, academic feel) + Inter (body).
- **Visual language**: Glassmorphism cards, soft gold gradients, blue-to-navy hero overlays, subtle grain, rounded-2xl cards with shadow-glow on hover.
- **Animations**: Framer Motion — fade/slide on scroll, animated counters, parallax hero, hover lift/scale, marquee/auto-carousel testimonials, animated gradient blobs, floating logo accents.
- **Logo**: Provided school crest used in navbar, footer, hero, and as a watermark accent.

## Pages (TanStack Start routes)

```
src/routes/
  __root.tsx          shared Navbar + Footer + WhatsApp/scroll-top floats
  index.tsx           Home (hero slider + all summary sections)
  about.tsx           About Us
  academics.tsx       Academic programs
  facilities.tsx      Facilities
  gallery.tsx         Gallery with lightbox
  admissions.tsx      Admissions form + info
  contact.tsx         Contact + map
```

Each route gets its own SEO `head()` (title, description, og:title/description).

## Home Page Sections

1. **Top Hero Slider** — fullscreen swiper with 3 slides (campus building, classroom, students), dark blue gradient overlay, animated headline "Building Bright Futures Since 2003", subheading, dual CTAs (Admissions Open, Contact Us), floating gold accents, scroll indicator.
2. **Announcements ticker** — gold marquee bar.
3. **About preview** — split layout, school intro, animated counters (22+ Years, 1500+ Students, 60+ Teachers, 6 Programs).
4. **Academic Programs** — 6 animated cards (Nursery, Preschool, KG, Primary, Secondary, +2) with icons and hover lift.
5. **Facilities** — 8 glass cards (Smart Classrooms, Computer Lab, Science Lab, Library, Sports, CCTV, Transport, Digital Learning).
6. **Why Choose Us** — 6 feature cards.
7. **Gallery preview** — masonry strip with hover zoom + link to full gallery.
8. **Testimonials** — auto-sliding carousel of parent/student reviews.
9. **Admissions CTA banner** — gold gradient with animated button.
10. **News & Events** — 3 latest cards.
11. **Contact strip** — quick info + map preview.

## Reusable Components

- `Navbar` (sticky, glass, mobile drawer, dropdown for Academics)
- `Footer` (4-column: about, quick links, admissions, contact, social)
- `HeroSlider`, `SectionHeading`, `AnimatedCounter`, `ProgramCard`, `FacilityCard`, `FeatureCard`, `TestimonialCarousel`, `GalleryGrid` + `Lightbox`, `AdmissionForm`, `WhatsAppFab`, `ScrollToTop`, `AdmissionPopup`

## Page-specific Highlights

- **About**: founder vision, mission/values trio, history timeline, leadership note.
- **Academics**: detailed program tiers with curriculum bullets, teaching methodology.
- **Facilities**: full grid with descriptions and imagery.
- **Gallery**: filterable tabs (Campus / Classrooms / Events) + lightbox.
- **Admissions**: process steps, required documents, fee inquiry form, FAQ accordion.
- **Contact**: full form, embedded Google Map iframe (Hafeezpet location), phone/address card, social icons.

## School Data (used throughout)

- Name: HOLY FATHIMA HIGH SCHOOL, HAFEEZ PET
- Address: 4-1061/84, New Hafeezpet, Marthanda Nagar, Hafeezpet, Hyderabad, Telangana 500049
- Phone: 9133531525 / 9603588716
- Established: 2003 · English Medium · Nursery to +2

## Technical Notes

- Stack already in place: TanStack Start + React 19 + Tailwind v4 + shadcn. Will add `framer-motion`, `embla-carousel-react` (slider), `lucide-react` (already present typically).
- All colors via semantic tokens added to `src/styles.css` (oklch).
- Logo + uploaded photos copied into `src/assets/` and imported as ES6 modules.
- Form is frontend-only (toast confirmation) — no backend unless requested later.
- Google Map via standard iframe embed (no API key needed).
- Fully responsive, mobile drawer nav, smooth scroll, scroll-to-top, WhatsApp float.

## Out of Scope (can add later)

- Backend storage for admission form submissions (would need Lovable Cloud).
- CMS for dynamic news/announcements (currently static content).
- Authentication / parent portal.

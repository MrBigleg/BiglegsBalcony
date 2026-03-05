# 01 - Implementation Blueprint

## 1) Product definition

Bigleg's Balcony is a Thailand-focused street art directory with:
- artist-owned profile pages
- province landing pages
- photo-first browsing and full-screen media carousel
- moderated place association using Google Maps/Places

MVP is non-commercial and community-first.

## 2) Architecture

### Frontend
- Next.js 15+ App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

### Auth
- WorkOS AuthKit
- Google login enabled at launch
- Optional additional social providers later

### Backend
- Next.js route handlers for app APIs
- Supabase Postgres as source of truth
- R2 signed upload URLs for media

### External services
- Google Places API (Place Details, Text Search, Geocoding where required)
- Optional Maps Embed for detail pages

## 3) Core user roles

- `artist`: default post-signup
- `moderator`: can approve/reject and link places
- `admin`: manage moderators and system controls

## 4) Routes

- `/` home
- `/provinces`
- `/province/[slug]`
- `/artists`
- `/artist/[slug]`
- `/artwork/[id]`
- `/submit` (auth required)
- `/dashboard` (artist)
- `/moderation` (moderator/admin)
- `/admin/users` (admin only)

## 5) UI modules

### Home
- Hero title: Bigleg's Balcony
- Subtitle: Thailand street art. Artist-submitted. Culturally documented.
- CTA: Browse by Province, Browse Latest, Submit Artwork
- Latest approved artwork grid

### Province page
- Header stats: total artists, total works, recently verified
- Filter chips: city, permanence tier, with/without map link
- Masonry or large-card photo layout

### Artist page
- Artist identity and links
- Artist's approved artworks only
- Linked places section generated from moderated place links

### Artwork detail
- Full-screen carousel (image/video)
- Metadata panel (artist, province, last verified, permanence)
- Google Maps CTA only if moderated map link exists

### Submit flow
- Artist enters metadata and uploads media
- Artist pastes one location input (plus code, URL, or text)
- System attempts parse and candidate match
- Submission status starts as `pending`

### Moderation
- Pending queue
- Actions: approve, reject, request changes, archive
- Place tools: confirm place_id, set maps URL, set verification status

## 6) Build plan

### Phase 1 - Foundations
- scaffold Next.js project
- auth + role middleware
- DB schema migration
- R2 setup and upload pipeline

### Phase 2 - Public browsing
- home/provinces/artist/artwork pages
- core grid and carousel components
- bilingual UI strings

### Phase 3 - Submission + moderation
- submit form and media attach
- moderation queue and actions
- place linking workflow

### Phase 4 - hardening
- analytics, rate limiting, error logging
- cost caps, upload caps
- seed import utility

## 7) Non-negotiable behaviours

- Never infer artist name from location text.
- Hyphenated strings are treated as raw location input only.
- Artist identity is always profile-auth based.
- Place association is moderator-confirmed before public display.

# Bigleg's Balcony

Thailand street art directory. Artist-submitted. Culturally documented.

A location-based directory mapping street art across Thailand — Bangkok, Chiang Mai, Phuket, and beyond. Each artwork is catalogued with artist attribution, GPS coordinates, cultural context, and a permanence index (permanent, at-risk, verified).

## Stack

- [Astro](https://astro.build) — static site with content collections
- [Tailwind CSS](https://tailwindcss.com) v4
- [React](https://react.dev) + [Shadcn UI](https://ui.shadcn.com) for interactive components
- [Lucide React](https://lucide.dev) icons
- Built on the [Minted Directory](https://github.com/masterkram/minted-directory-astro) template

## Data Sources

Content can be loaded from multiple sources (configured in `src/config/settings.toml`):

- **JSON** (default) — `src/data/directory/directory.json`
- **Google Sheets** — public spreadsheet via `astro-sheet-loader`
- **CSV** — `src/data/directory/directory.csv`
- **Markdown** — individual `.md` files in `src/data/directory/`

### Switching to Google Sheets

1. Create a Google Sheet with columns: `id`, `title`, `description`, `artist`, `province`, `tags`, `image`, `link`, `featured`
2. Make it publicly shareable and copy the document ID from the URL
3. Update `src/config/settings.toml`:

```toml
[directoryData.source]
name = "sheets"

[directoryData.source.sheets]
key = "YOUR_GOOGLE_SHEET_ID"
```

4. Rebuild the site

## Local Development

```sh
pnpm install
pnpm dev
```

## Build

```sh
pnpm build
pnpm preview
```

## Project Structure

```
src/
  config/settings.toml    # Site config, data source, tags, nav
  data/directory/          # JSON/CSV/markdown content
  lib/loaders/             # Content collection loaders (JSON, sheets, CSV, markdown)
  pages/
    index.astro            # Homepage
    artist/[slug].astro    # Artist profile
    artists/               # Artist listing
    artwork/[id].astro     # Artwork detail
    province/[slug].astro  # Province page
    provinces/             # Province listing
  validation/              # Zod schemas for directory and settings
DOCS/                      # Research and planning documents
```

# ToolVerdict

Independent SaaS & AI tool comparison reviews. Editorial verdicts, hard numbers, no fluff.

## Stack

- **Astro 5** — static output, zero client JS by default
- **@astrojs/mdx** — articles written in MDX
- **@astrojs/sitemap** — automatic sitemap
- Self-hosted fonts: Space Grotesk (display) + IBM Plex Sans (body) + IBM Plex Mono (data)

## Run

```bash
npm install
npm run dev        # local dev server
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## Configuration

| Env var | Purpose |
|---|---|
| `PUBLIC_SITE_URL` | Canonical domain. Placeholder `https://toolverdict.dev` is set in `astro.config.mjs` — change it once a domain is purchased |
| `PUBLIC_ADSENSE_CLIENT` | AdSense client id (`ca-pub-xxxx`). Until set, ad slots render a labeled placeholder box |

## Writing an article

1. Create `src/content/articles/your-slug.mdx`
2. Fill the frontmatter: `title`, `description`, `category`, `pubDate`, `verdict` (score / winner / label / summary), optional `picks`
3. Use the built-in MDX components:
   - `<ComparisonTable cols={[...]} rows={[...]} highlightRow={0} caption="..." />`
   - `<VerdictBox score={9.1} winner="Tool" label="Best value">summary slot</VerdictBox>`
   - `<ProsCons tool="Tool" pros={[...]} cons={[...]} />`
   - `<AdSlot />`
4. Set `draft: true` to keep it out of listings and the sitemap

The main verdict box and the "quick picks" strip are rendered automatically from
frontmatter by `ArticleLayout` — do not duplicate them in the article body.

## ⚠️ Placeholder data

The sample article `best-ai-writing-tools-2026.mdx` contains **placeholder pricing
and scores** used to demonstrate the structure. Every number must be verified
against each vendor's official pricing page before the article is published.

## Deploy

Static output in `dist/` — deploy to Vercel or Cloudflare Pages with no adapter.

## Next steps

- [ ] Purchase a domain; update `site` in `astro.config.mjs` and `public/robots.txt`
- [ ] Apply for AdSense; set `PUBLIC_ADSENSE_CLIENT`
- [ ] Verify all placeholder prices in the first article, then set real publish date
- [ ] Optional: related-posts block, author pages, newsletter capture

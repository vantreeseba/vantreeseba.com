# vantreeseba.com

Personal site for Ben Van Treese. Built with [Eleventy](https://www.11ty.dev/).

## Setup

```bash
npm install
```

Set a GitHub personal access token so project data is fetched at build time:

```bash
export GH_TOKEN=your_token_here
```

Without it the projects page will render with empty lists.

## Dev

```bash
npm run dev
```

Starts Eleventy's dev server at [http://localhost:3000](http://localhost:3000) with live reload.

## Build

```bash
npm run build
```

Output goes to `_site/`.

## Structure

```
src/
  _data/
    site.js         # site metadata (name, links)
    projects.js     # async — fetches GitHub repos at build time
    games.json      # static game data
    talks.json      # static talks list
  _includes/
    base.njk        # base layout
  css/
    styles.css
  assets/
  index.njk
  projects.njk
  games.njk
  talks.njk
```

## Content

- **Projects** — pulled live from GitHub at build time via `GH_TOKEN`. Queries dropecho (Unity + Haxe) and personal repos.
- **Games** — edit `src/_data/games.json`.
- **Talks** — edit `src/_data/talks.json`.

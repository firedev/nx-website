# Sites/nikolayx — nikolayx.com

Статическая визитка Ника (одна страница). Читать перед любой правкой в этой папке.

## Стек и структура

- **Никакого билда**: корень репо = сайт. `index.html` — вся страница (HTML + inline CSS/JS), ассеты рядом (`portrait.jpg`, `ocean.jpeg`, `social-preview.jpg`, `favicon.png`, `apple-touch-icon.png`, `insights.js`)
- `attention/` — отдельная подстраница со своим `index.html` (живёт на `/attention/`)
- Repo: `git@github.com:firedev/nx-website`, branch `master`. Хостинг — legacy GitHub Pages (branch master, path /), `CNAME` → nikolayx.com
- **Репо должен оставаться public** — приватный на бесплатном плане молча перестаёт собирать Pages, продолжая отдавать старую версию (см. `Sites/CLAUDE.md` § Деплой — грабли GitHub Pages)

## Деплой

Правка → коммит → пуш, собирать нечего:

```bash
cd /Users/nick/obsidian/obsidian-life/Sites/nikolayx
git add -A && git commit -m "..." && git push
```

## Writing Guidelines

- Use sentence case for text formatting

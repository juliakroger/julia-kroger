# Júlia Kroger — Portfolio

A sci-fi editorial portfolio built with React, TypeScript, and Vite.

## Run locally

Requirements: Node.js 20.19+ and pnpm 11.

```bash
corepack enable
pnpm install
pnpm dev
```

Vite will print the local URL, usually `http://localhost:5173`.

## Useful commands

```bash
pnpm dev        # start the local development server
pnpm typecheck  # check TypeScript
pnpm build      # create the production build in dist/
pnpm preview    # preview the production build
```

## Add a blog post

Create a Markdown file in `src/content/posts/`. Copy
`your-first-post.md` as a starting point, write the post, then set:

```yaml
draft: false
```

Posts are sorted by date and appear automatically in the Blog tab. The built-in
renderer supports headings, paragraphs, links, bold text, inline code, lists,
quotes, and fenced code blocks.

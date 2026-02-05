# Create a new Svelte app

## Prerequisites

- [Bun](https://bun.sh/) (v1.3+)

## Steps

### Go to your projects folder and run:

```bash
# Go to your projects folder
cd ~/projects

bunx sv create gh-pages-with-svelte
```

```bash
% bunx sv create gh-pages-with-svelte

┌  Welcome to the Svelte CLI! (v0.11.4)
│
◆  Which template would you like? ## select sveltekit minimal
│  ● SvelteKit minimal (barebones scaffolding for your new app)
│  ○ SvelteKit demo
│  ○ Svelte library
◆  Add type checking with TypeScript? ## select yes, using TypeScript syntax
│  ● Yes, using TypeScript syntax
│  ○ Yes, using JavaScript with JSDoc comments
│  ○ No
◆  What would you like to add to your project? ## select tailwindcss and prettier
│  ◼ prettier (formatter - https://prettier.io) ---------- # use space bar to select
│  ◻ eslint
│  ◻ vitest
│  ◻ playwright
│  ◼ tailwindcss (css framework - https://tailwindcss.com) # use space bar to select
│  ◻ sveltekit-adapter
│  ◻ devtools-json
│  ◻ drizzle
│  ◻ lucia
│  ◻ mdsvex
│  ◻ paraglide
│  ◻ storybook
│  ◻ mcp
◆  tailwindcss: Which plugins would you like to add? ## select nothing here
│  ◻ typography (@tailwindcss/typography)
│  ◻ forms
│
◆  Project created
│
◆  Successfully setup add-ons: prettier, tailwindcss
│
◆  Which package manager do you want to install dependencies with? ## select bun
│  ○ None
│  ○ npm
│  ○ yarn
│  ○ pnpm
│  ● bun
│  ○ deno
│
└  You're all set!
```

### Open your new app folder (here: gh-pages-with-svelte)

```bash
# open with vscode
code gh-pages-with-svelte
```

```bash
# run the dev server
bun run dev --open # To close the dev server, hit Ctrl-C
```

### Setup the project

#### Add the adapter-static to the project

```bash
bun add -D @sveltejs/adapter-static
```

#### Update svelte.config.js to use the adapter-static

```diff
-import adapter from '@sveltejs/adapter-auto';
+import adapter from '@sveltejs/adapter-static';
...
const config = {
	kit: {
-       adapter: adapter()
+	    adapter: adapter({ fallback: 'index.html' }),
+       paths: { base: '/gh-pages-with-svelte' },
```

> Note: Replace /gh-pages-with-svelte with your repository name.

#### Edit default .prettierrc to use 2 spaces instead of tabs

```diff
-	 "useTabs": true,
+    "tabWidth": 2,
+    "useTabs": false,
```

#### Format the whole codebase with prettier

```bash
bun format
```

#### Create a .github/workflows/gh-pages.yml file with the following content:

> This will create a GitHub Actions workflow that builds and deploys the SvelteKit app to GitHub Pages on every push to the main branch.

See [.github/workflows/gh-pages.yml](.github/workflows/gh-pages.yml) for the full content of the workflow file.

### Commit and deploy to GitHub Pages

#### Initialize a git repository

```
git init
git branch -M main
git add .
git commit -m "Initial commit"
```

#### Push to GitHub

> The origin URL is displayed when you create a new repository on GitHub.

```bash
git remote add origin git@github.com:<my-username>/<my-repo>.git
git push -u origin main
```

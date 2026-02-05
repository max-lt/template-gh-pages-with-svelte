// Import Node.js file system module to read files from disk
import { readFileSync } from 'fs';

// Import the marked library to convert Markdown to HTML
import { marked } from 'marked';

// Enable prerendering (SSG - Static Site Generation)
// This tells SvelteKit to generate this page as static HTML at build time
// instead of rendering it on each request
export const prerender = true;

// Disable Client-Side Rendering (CSR)
// This means NO JavaScript will be sent to the browser for this page
// The page will be 100% static HTML/CSS - perfect for documentation!
export const csr = false;

// The load function runs at build time (during 'bun run build')
// It prepares the data that will be passed to the +page.svelte component
export async function load() {
  // Read the README.md file from the project root at build time
  // This happens during the build, not when users visit the page
  const markdownContent = readFileSync('README.md', 'utf-8');

  // Convert the Markdown content to HTML using the 'marked' library
  // This also happens at build time, so the browser receives ready-to-display HTML
  const htmlContent = await marked.parse(markdownContent);

  // Return the HTML content to be used in +page.svelte
  // This data will be available as the 'data' prop in the component
  return {
    htmlContent
  };
}

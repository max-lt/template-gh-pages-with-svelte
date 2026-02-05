<script lang="ts">
  // Import the PageData type for TypeScript type checking
  import type { PageData } from './$types';

  // Receive the data from +page.server.ts
  // The 'data' prop contains the htmlContent that was generated at build time
  export let data: PageData;
</script>

<!--
  Container for the documentation content
  - prose: Tailwind typography plugin class for beautiful text formatting
  - max-w-4xl: Maximum width for comfortable reading
  - mx-auto: Center the content horizontally
  - p-8: Padding on all sides
-->
<div class="prose prose-slate max-w-4xl mx-auto p-8">
  <!--
    {@html ...} directive renders raw HTML
    The content comes from data.htmlContent, which was generated at build time
    No JavaScript is needed - this is pure static HTML!
  -->
  {@html data.htmlContent}
</div>

<style>
  :global(.prose) {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  }

  :global(.prose h1) {
    font-size: 2.25rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }

  :global(.prose h2) {
    font-size: 1.875rem;
    font-weight: 600;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  :global(.prose h3) {
    font-size: 1.5rem;
    font-weight: 500;
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
  }

  :global(.prose h4) {
    font-size: 1.25rem;
    font-weight: 500;
    margin-top: 1.25rem;
    margin-bottom: 0.5rem;
  }

  :global(.prose pre) {
    background-color: #f5f5f5;
    padding: 1rem;
    border-radius: 0.5rem;
    overflow-x: auto;
    margin: 1rem 0;
  }

  :global(.prose code) {
    font-size: 0.875rem;
    font-family: 'Monaco', 'Courier New', monospace;
  }

  :global(.prose p) {
    margin: 1rem 0;
  }

  :global(.prose ul) {
    list-style-type: disc;
    padding-left: 1.5rem;
    margin: 1rem 0;
  }

  :global(.prose blockquote) {
    border-left: 4px solid #cbd5e0;
    padding-left: 1rem;
    font-style: italic;
    color: #4a5568;
    margin: 1rem 0;
  }

  :global(.prose a) {
    color: #2563eb;
    text-decoration: none;
  }

  :global(.prose a:hover) {
    text-decoration: underline;
  }
</style>

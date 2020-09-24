<style>
  :global(:root) {
    /* Color Pallette  */
    --baby-powder-color: #f2f5f2; /* Light shades: Use this color as the background for your dark-on-light designs, or the text color of an inverted design. */
    --napa-color: #ada191; /* Light accent: Accent colors can be used to bring attention to design elements by contrasting with the rest of the palette. */
    --pomegranate-color: #ff3e00; /* Main brand color: This color should be eye-catching but not harsh. It can be liberally applied to your layout as its main identity. */
    --twine-color: #bc9653; /* Dark accent: Another accent color to consider. Not all colors have to be used - sometimes a simple color scheme works best. */
    --mirage-color: #1b2b31; /* Dark shades: Use as the text color for dark-on-light designs, or as the background for inverted designs. */

    --base-font-size: 1rem;
    --footer-height: 4.6875rem;
    --navigation-height: 12.5rem;
    --main-height: calc(100vh - (var(--footer-height) * 2.25));
    --spacing-unit: 1.125rem;
  }

  main {
    background-color: white;
    box-sizing: border-box;
    height: var(--main-height);
    padding: 2em;
    position: relative;
  }
</style>

<Nav segment="{segment}" />
<main>
  <slot />
</main>
<Footer />

<script>
  import Nav from '../components/Nav.svelte';
  import Footer from '../components/Footer.svelte';

  export let segment;
</script>

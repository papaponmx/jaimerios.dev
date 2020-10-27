<style lang="scss">
  @import '../styles/_variables';
  main {
    box-sizing: border-box;
    padding: 0 1rem;
  }

  /* .blog {
    background-image: linear-gradient(
      180deg,
      $baby-powder-color 0%,
      var(--mirage-accent-color) 124%
    );
  } */

  .wrapper {
    display: flex;
    flex-direction: column;
  }

  /**
   * Styles for Vertical Rhythmm
   **/

  :global(body) {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    font-weight: 400;
    color: #000000;
  }

  :global(p) {
    margin-bottom: 1rem;
  }

  :global(h1, h2, h3, h4, h5) {
    margin: 3rem 0 1.38rem;
  }

  :global(h1) {
    margin-top: 0;
    font-size: 7.594rem;
  }

  :global(h2) {
    font-size: 5.063rem;
  }

  :global(h3) {
    font-size: 3.375rem;
  }

  :global(h4) {
    font-size: 2.25rem;
  }

  :global(h5) {
    font-size: 1.5rem;
  }

  :global(small, .text_small) {
    font-size: 0.667rem;
  }
</style>

<div class="wrapper">
  <Nav segment="{segment}" />
  <main class="{segment === 'blog' && 'blog'}">
    <slot />
  </main>
  <!-- <Footer /> -->
</div>

<script lang="typescript">
  import Nav from '../components/Nav.svelte';
  // TODO: Add footer and keep it at the bottom
  // import Footer from '../components/Footer.svelte';

  export let segment;
</script>

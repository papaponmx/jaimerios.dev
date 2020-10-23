<style lang="scss">
  @import '../styles/_variables';
  main {
    background-color: white;
    box-sizing: border-box;
    min-height: var(--main-height);
    padding: 2em;
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

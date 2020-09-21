<style>
  :global(:root) {
    --primary-color: #ff3e00;
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
<Footer segment="{segment}" />

<script>
  import Nav from '../components/Nav.svelte';
  import Footer from '../components/Footer.svelte';

  export let segment;
</script>

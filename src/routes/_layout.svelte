<style>
  :global(:root) {
    --primary-color: #ff3e00;
  }

  main {
    position: relative;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
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

<style>
  section.contact-page--wrapper {
    display: grid;
    grid-template-columns: repeat(10, 10vw);
    grid-template-rows: repeat(12, 10vh);
  }

  h1 {
    color: var(--rose-color);
    font-size: calc(var(--base-font-size) * 12);
    font-weight: 800;
    grid-column: 1 / 10;
    grid-row: 1 / 5;
  }

  p {
    font-size: 2.5rem;
    font-weight: 300;
    max-width: 31.25rem;
  }
  p:not(.cta--paragraph) {
    margin-left: 5rem;
  }

  .cta--paragraph {
    grid-column: 1 / 10;
    grid-row: 3 / 5;
    margin-top: 4rem;
    line-height: 1.2;
  }

  .email {
    font-size: 4rem;
    font-weight: 300;
    grid-column: 1 / 10;
    grid-row: 6 / 7;
    text-decoration: none;
  }

  .cta--paragraph,
  .email {
    margin-left: 2rem;
  }
</style>

<svelte:head>
  <title>Contact</title>
</svelte:head>

<section class="contact-page--wrapper">
  <h1>Contact</h1>

  <p class="cta--paragraph">
    For project ideas, speaking ideas or just to say hello
  </p>

  <a
    href="mailto:jaime.rios@hey.com?subject=Mail from jaimerios.io"
    class="email"
  >jaime.rios@hey.com</a>

  <!-- TODO: Move this into its own commponent -->
</section>
<SocialNetworks />

<script>
  import SocialNetworks from '../../components/SocialNetworks.svelte';
</script>

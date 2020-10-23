<style lang="scss">
  @import '../../styles/_functions';
  @import '../../styles/_variables';

  section.contact-page--wrapper {
    display: grid;
    grid-template-columns: repeat(10, 10vw / rvr(1));
    grid-template-rows: repeat(12, 10vh / rvr(1));
  }

  h1 {
    color: $rose-color;
    font-size: $base-font-size * 12;
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
    margin-top: rvr(4);
    line-height: 1.5;
  }

  .email {
    font-size: rvr(4);
    font-weight: 300;
    grid-column: 1 / 10;
    grid-row: 6 / 7;
    text-decoration: none;
  }

  .cta--paragraph,
  .email {
    margin-left: rvr(2);
  }

  @media screen and (max-width: 30rem) {
    h1 {
      font-size: rvr(4.5);
    }

    section.contact-page--wrapper {
      display: flex;
      flex-direction: column;
      min-height: 70vh;
    }
    p,
    .cta--paragraph,
    .email {
      margin-left: 0;
    }

    p,
    .email {
      font-size: rvr(1.5);
    }
    .email {
      color: $rose-color;
      font-weight: 600;
      font-size: rvr(2);
    }

    .cta--paragraph {
      margin-top: rvr(-2);
      font-size: rvr(2);
      line-height: rvr(1);
    }
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
</section>
<SocialNetworks />

<script lang="typescript">
  import SocialNetworks from '../../components/SocialNetworks.svelte';
</script>

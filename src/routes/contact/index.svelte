<style lang="scss">
  @import '../../styles/_functions';
  @import '../../styles/_variables';

  h1 {
    color: $rose-color;
    font-size: 5.25rem;
    margin-bottom: 0;
    font-weight: 800;
  }

  p {
    margin: 0;
    font-weight: 300;
    max-width: 31.25rem;
  }

  .cta--paragraph {
    font-size: 1.5rem;
    margin-bottom: 0.25rem;
  }
  p:not(.cta--paragraph) {
    margin-left: 5rem;
  }

  .email {
    font-size: 1.5rem;
    font-weight: 300;
    text-decoration: none;
    margin-left: 1rem;
  }

  @media screen and (max-width: 30rem) {
    h1 {
      font-size: 3rem;
    }

    section.contact-page--wrapper {
      display: flex;
      flex-direction: column;
    }

    .cta--paragraph {
      font-size: 1rem;
      line-height: 1.75;
      padding-top: 0.25rem;
    }

    .email {
      color: $rose-color;
      font-weight: 600;
      padding-top: 0.25rem;
    }
  }
</style>

<svelte:head>
  <title>Contact</title>
</svelte:head>

<section class="contact-page--wrapper">
  <h1>Contact</h1>

  <p class="cta--paragraph">
    For project ideas, speaking or just to say hello:
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

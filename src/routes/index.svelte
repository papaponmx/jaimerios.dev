<style lang="scss">
  @import '../styles/_variables';

  /**
  * Routes/index.svelte
  **/

  main {
    padding: 1rem;
    max-width: 15rem;
    margin: 0 auto;
  }

  h1 {
    color: $pomegranate-color;
    font-weight: 800;
    font-size: 4.25rem;
    margin-bottom: 0.25rem;
  }

  header {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  h3 {
    color: $mirage-accent-color;
    font-size: 3rem;
    line-height: 1.2;
    margin-top: 1rem;
    font-weight: 300;
  }

  @media (min-width: 40rem) {
    main {
      max-width: none;
    }

    h1 {
      font-size: calc(var(--base-font-size) * 8);
    }
    h3 {
      font-weight: 200;
      font-size: calc(var(--base-font-size) * 3);
    }

    span {
      font-weight: 500;
      /* filter: brightness(310%); */
      color: var(--mirage-color-color);
    }
  }

  .cta-wrapper {
    margin-top: calc(var(--spacing-unit) * 1);
    display: flex;
    flex-direction: column;
    max-width: 150px;
    font-size: calc(var(--spacing-unit) * 2);
    font-weight: 200;
  }

  a {
    border-bottom: 1px solid var(--pomegranate-color);
    font-weight: 600;
    color: $mirage-accent-color;
    text-decoration: none;
    padding: calc(var(--spacing-unit) / 2);
    margin-right: calc(var(--spacing-unit) / 2);
    min-width: 100%;
  }

  a:hover,
  a:focus {
    box-shadow: inset 0 0 0 3rem var(--pomegranate-color);
    color: #ffffff;
    transition-duration: 250ms;
  }
</style>

<svelte:head>
  <title>Jaime Rios: Freelance Front End Developer</title>
  <meta
    name="description"
    content="I'm a Freelance Front End developer. As a Dev, I can turn your ideas into web applications."
  />
</svelte:head>

<main>
  <header>
    <h1>Hi, <wbr /> I am Jaime<wbr /></h1>
    <h3>Freelance <wbr /> <span>Front End</span> <wbr /> Developer</h3>
  </header>
  <div class="cta-wrapper">
    <a href="blog">Blog</a>
    {#if isDev}<a href="portfolio">Portfolio</a>{/if}
  </div>
</main>

<script lang="typescript">
  const isDev: boolean = process.env.NODE_ENV === 'development';
</script>

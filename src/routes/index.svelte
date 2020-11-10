<style lang="scss">
  @import '../styles/_variables';
  @import '../styles/_functions';

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
    font-size: 4.75rem;
    line-height: 1;
  }

  header {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  h1 {
    margin-bottom: -0.5rem;
  }
  h2 {
    color: $mirage-accent-color;
    font-size: 2.75rem;
    font-weight: 300;
    line-height: 1.25;
    margin-top: 0;
  }

  @media (min-width: 40rem) {
    main {
      max-width: none;
    }

    h1 {
      font-size: 6rem;
      line-height: 1.2;
    }
    h2 {
      font-weight: 200;
      font-size: 2.75rem;
      margin-top: 0;
    }

    span {
      font-weight: 500;
      color: $mirage-color;
    }
  }

  .cta-wrapper {
    margin-top: $spacing-unit * 1;
    display: flex;
    flex-direction: column;
    max-width: 150px;
    font-size: $spacing-unit * 2;
    font-weight: 200;
  }

  a {
    // border-bottom: 1px solid $pomegranate-color;
    font-weight: 600;
    color: $mirage-accent-color;
    text-decoration: none;
    padding: 1rem 1.5rem;
    margin-right: $spacing-unit / 2;
    margin-bottom: 1.25rem;
    min-width: 100%;
    line-height: 1.25;
  }

  a:hover,
  a:focus {
    box-shadow: inset 0 0 0 3rem $pomegranate-color;
    color: white;
    transition-duration: 300ms;
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
    <h2>Freelance <wbr /> <span>Front End</span> <wbr /> Developer</h2>
  </header>
  <div class="cta-wrapper">
    <a href="blog">Blog</a>
    {#if isDev}<a href="portfolio">Portfolio</a>{/if}
  </div>
</main>

<script lang="typescript">
  const isDev: boolean = process.env.NODE_ENV === 'development';
</script>

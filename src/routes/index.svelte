<style>
  main {
    padding: 1rem;
    max-width: 15rem;
    margin: 0 auto;
  }

  h1 {
    color: var(--pomegranate-color);
    font-weight: 100;
    margin-bottom: 0.25rem;
  }

  header {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  h3 {
    font-weight: 400;
    color: var(--mirage-color);
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
  }

  a {
    border-bottom: 1px solid var(--pomegranate-color);
    font-weight: 600;
    /* box-shadow: 0 0.5px var(--twine-color); */
    /* border-radius: calc(var(--spacing-unit) / 4); */
    color: var(--mirage-color);
    text-decoration: none;
    padding: calc(var(--spacing-unit) / 2);
    margin-right: calc(var(--spacing-unit) / 2);
  }

  a:first-of-type {
    margin-right: calc(var(--spacing-unit) * 2);
  }
  a:hover,
  a:focus {
    color: #ffffff;
    box-shadow: inset 0 0 0 2rem var(--pomegranate-color);
    transition-duration: 250ms;
  }
</style>

<svelte:head>
  <title>Jaime Rios: Senior Front End Developer</title>
</svelte:head>

<main>
  <header>
    <h1>Hi, I am Jaime</h1>
    <h3>Freelance <span>Front End</span> Developer</h3>
  </header>
  <div class="cta-wrapper">
    <a href="portfolio">Portfolio</a>
    <a href="blog">Blog</a>
  </div>
</main>

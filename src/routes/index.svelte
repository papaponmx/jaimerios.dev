<style>
  main {
    padding: 1rem;
    max-width: 15rem;
    margin: 0 auto;
  }

  h1 {
    color: var(--primary-color);
    font-size: 4rem;
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
    font-weight: 700;
    color: #333;
  }

  p {
    text-align: justify;
    max-width: 28.125rem;
  }
  @media (min-width: 40rem) {
    main {
      max-width: none;
    }
  }

  .cta-wrapper {
    margin-top: calc(var(--spacing-unit) * 1);
  }

  a {
    border: 0.0313rem solid var(--primary-color);
    text-decoration: none;
    border-radius: calc(var(--spacing-unit) / 4);
    padding: calc(var(--spacing-unit) / 2);
    margin-right: calc(var(--spacing-unit) / 2);
  }
  a:hover,
  a:focus {
    color: #ffffff;
    box-shadow: inset 0 0 0 2rem var(--primary-color);
    transition-duration: 250ms;
  }
</style>

<svelte:head>
  <title>Jaime Rios: Senior Front End Developer</title>
</svelte:head>

<main>
  <header>
    <h1>Hi, I am Jaime</h1>
    <h3>A Senior Front End Developer</h3>
    <p>
      <!-- TODO: Validate this offer with my niche -->
      From static websites, to scaleable modern web applications. I help awesome
      people to build ambitious yet accessible web applications.
    </p>
  </header>
  <div class="cta-wrapper">
    <a href="portfolio">Portfolio</a>
    <a href="blog">Ready my blog</a>
  </div>
</main>

<script lang="ts">
</script>

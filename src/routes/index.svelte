<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    /* text-transform: uppercase; */
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
    max-width: 450px;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
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

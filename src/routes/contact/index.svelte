<style>
  section.social-networks--wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    max-width: 500px;
  }

  section.contact-page--wrapper {
    display: grid;
    grid-template-columns: repeat(10, 10vw);
    grid-template-rows: repeat(12, 10vh);
  }
  img {
    width: calc(var(--spacing-unit) * 2);
  }

  ul {
    display: flex;
    justify-content: space-evenly;
    padding-left: 0;
    list-style: none;
    max-width: 500px;
    min-width: 100%;
  }
  li a {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: calc(var(--spacing-unit) * 1);
    justify-content: space-between;
    color: var(--mirage-color);
  }

  li:hover span,
  li:focus span {
    display: block;
  }

  h1 {
    color: var(--rose-color);
    font-size: calc(var(--base-font-size) * 12);
    font-weight: 800;
    grid-column: 1 / 10;
    grid-row: 1 / 5;
  }

  /* TODO: Animate hover states */

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

  .social-networks--wrapper {
    grid-column: 1 / 10;
    grid-row-start: 10;
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
  <section class="social-networks--wrapper">
    <h3>You find me online on the following social networks</h3>
    <ul>
      {#each socialNetworks as socialNetwork}
        <li>
          <a
            href="{socialNetwork.profileUrl}"
            target="_blank"
            title="{`Go to my ${socialNetwork.name}'s profile`}"
            rel="noreferrer nofollow"
          >
            <img
              alt="{`${socialNetwork.name} brand logo`}"
              role="figure"
              src="{`images/${socialNetwork.name.toLowerCase()}.svg`}"
            />
            <span>{socialNetwork.name}</span>
          </a>
        </li>
      {/each}
    </ul>
  </section>
</section>

<script>
  const socialNetworks = [
    {
      name: 'Dev',
      profileUrl: 'https://dev.to/papaponmx',
    },
    {
      name: 'Github',
      profileUrl: 'http://github.com/papaponmx',
    },
    {
      name: 'Dribbble',
      profileUrl: 'http://dribbble.com/papaponmx',
    },
    {
      name: 'Twitter',
      profileUrl: 'https://twitter.com/papaponmx',
    },
    {
      name: 'LinkedIn',
      profileUrl: 'https://www.linkedin.com/in/papaponmx/',
    },
    {
      name: 'Reddit',
      profileUrl: 'https://www.reddit.com/user/papaponmx',
    },
  ];
</script>

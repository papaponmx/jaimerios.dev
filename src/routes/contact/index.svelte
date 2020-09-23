<style>
  section {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    max-width: 500px;
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

  /* TODO: Animate hover states */
  span {
    display: none;
  }
</style>

<svelte:head>
  <title>Contact</title>
</svelte:head>
<h1>Contact me</h1>
<section>
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

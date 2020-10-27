<style lang="scss">
  @import '../styles/_functions';
  @import '../styles/_variables';
  section.social-networks--wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    max-width: 500px;
    margin-left: 1.5rem;
    padding-bottom: 4rem;

    grid-column: 1 / 10;
    grid-row-start: 10;
  }

  img {
    width: calc(var(--spacing-unit) * 2);
  }

  ul {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
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
    color: $mirage-accent-color;
  }

  p {
    font-size: 1.75rem;
  }

  @media screen and (max-width: 30rem) {
    section.social-networks--wrapper {
      margin: 0;
    }
    ul {
      display: grid;
      grid-template-columns: repeat(3, 2.5rem);
      grid-template-rows: repeat(2, 3rem);
      gap: 1rem;
    }

    p {
      font-size: rvr(1);
      font-weight: 300;
    }
  }

  /* TODO: Animate hover states */
</style>

<section class="social-networks--wrapper">
  <p>If you’d like to follow my work online, here is where you can find me:</p>
  <ul>
    {#each socialNetworks as socialNetwork}
      <li>
        <a
          href="{socialNetwork.profileUrl}"
          target="_blank"
          title="{socialNetwork.name}"
          rel="noreferrer nofollow"
        >
          <img
            alt="{`${socialNetwork.name} brand logo`}"
            role="figure"
            src="{`images/${socialNetwork.name.toLowerCase()}.svg`}"
          />
        </a>
      </li>
    {/each}
  </ul>
</section>

<script lang="typescript">
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

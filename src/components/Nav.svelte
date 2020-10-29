<style lang="scss">
  @import '../styles/_variables';
  @import '../styles/_functions';
  nav {
    font-weight: 300;
    font-size: 1rem;
    height: rvr(1.5);
    padding-top: 0.5rem 1rem 0;
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
  }

  /* clearfix */
  ul::after {
    content: '';
    display: block;
  }

  li {
    display: block;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    background-color: rgb(255, 62, 0);
    bottom: rvr(-0.0625);
    content: '';
    display: block;
    height: rvr(0.125);
    position: absolute;
    width: (100% / rvr(1)) - rvr(1);
  }

  a {
    text-decoration: none;
    display: block;
    margin-right: 1rem;
  }
</style>

<nav>
  <!-- IDEA: Add a services page -->
  <ul>
    <li>
      <a
        aria-current="{segment === undefined ? 'page' : undefined}"
        href="."
      >home</a>
    </li>
    <li>
      <a
        aria-current="{segment === 'about' ? 'page' : undefined}"
        href="about"
      >about</a>
    </li>
    <li>
      <a
        aria-current="{segment === 'contact' ? 'page' : undefined}"
        href="contact"
        rel="prefetch"
      >contact</a>
    </li>
    <li>
      <a
        aria-current="{segment === 'blog' ? 'page' : undefined}"
        rel="prefetch"
        href="blog"
      >blog</a>
    </li>
    {#if isDev}
      <li>
        <a
          aria-current="{segment === 'portfolio' ? 'page' : undefined}"
          rel="prefetch"
          href="portfolio"
        >portfolio</a>
      </li>
    {/if}
  </ul>
</nav>

<script lang="typescript">
  export let segment;
  const isDev: boolean = process.env.NODE_ENV === 'development';
</script>

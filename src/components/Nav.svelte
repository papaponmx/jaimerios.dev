<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: '';
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    background-color: rgb(255, 62, 0);
    bottom: -0.0625rem;
    content: '';
    display: block;
    height: 0.125rem;
    position: absolute;
    width: calc(100% - 1em);
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
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

<script>
  export let segment;
  const isDev = process.env.NODE_ENV === 'development';
</script>

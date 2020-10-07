<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
    list-style-type: none;
  }

  li {
    color: var(--mirage-color);
    margin-bottom: 1rem;
    padding: 1.5rem;
  }

  li a {
    text-decoration: none;
  }

  h2 {
    font-size: 2.25rem;
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: var(--mirage-color);
    margin-bottom: 0;
    max-width: 40.625rem;
    font-weight: 200;
  }

  time {
    /* TODO: Change this color for a more constrasting one */
    color: var(--napa-color);
    font-size: 1.25rem;
    font-weight: 700;
    margin-top: -2rem;
  }

  p {
    font-size: 1.25rem;
    font-weight: 300;
    margin-top: 0.3125rem;
    margin-bottom: 0rem;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<ul>
  {#each posts as post}
    <li>
      <a rel="prefetch" href="blog/{post.slug}">
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <time>{new Date(post.published_at).toDateString()}</time>
      </a>
    </li>
  {/each}
</ul>

<script context="module">
  export function preload({ _params, _query }, session) {
    return this.fetch('/blog.json')
      .then(r => r.json())
      .then(posts => {
        return { posts };
      })
      .catch(err => 'Error is ' + JSON.stringify(null, 2, err));
  }
</script>

<script>
  export let posts;
</script>

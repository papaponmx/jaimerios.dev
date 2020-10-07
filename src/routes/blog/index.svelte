<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
    list-style-type: none;
  }

  li {
    color: var(--mirage-color);
    /* min-height: calc(100vh - 6.25rem); */
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

<!-- <h1>Recent posts</h1> -->

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
  <!-- <button on:click={getNextFivePosts}>Get  new Posts</button> -->
</ul>

<script context="module">
  // const getNextFivePosts = () => {
  //   if (process.browser) {
  //     fetch('blog/new_posts');
  //   }
  // };

  export function preload({ _params, _query }, session) {
    return this.fetch('/blog.json')
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }

  // TODO: Add Intersection Observer API implementation
  // What do I need to do?
  // ✅ 1. Set initial blog post to 0
  //  2. Get the next 5 blog posts
  //  3. Update that markup.
</script>

<script>
  export let posts;
</script>

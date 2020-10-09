<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  li {
    color: var(--mirage-color);
    max-width: 600px;
    margin-bottom: 2.25rem;
  }

  li a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 600px;
  }

  h2 {
    font-size: 1.75rem;
    color: var(--mirage-accent-color);
    font-weight: 400;
  }

  time {
    color: black;
    font-size: 1rem;
    font-weight: 200;
    margin-top: -1rem;
  }

  .row {
    margin-top: -0.65rem;
  }

  .row span {
    color: var(--mirage-color);
  }

  .tag {
    margin-right: 0.5rem;
    font-weight: 200;
    font-size: 0.75rem;
    color: var(--mirage-color);
    border: 1px solid gray;
    padding: 1px 6px;
    border-radius: 25px;
  }
  .tag:hover {
    cursor: default;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<ul>
  {#each posts as post}
    <li class="posts-list">
      <a rel="prefetch" href="blog/{post.slug}">
        <h2>{post.title}</h2>
        <div class="row">
          <span>{post.user.name}</span>
          <time>{new Date(post.published_at).toDateString()}</time>
        </div>
        <div class="tags__row">
          {#each post.tag_list as tag}<span class="tag">{tag}</span>{/each}
        </div>
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

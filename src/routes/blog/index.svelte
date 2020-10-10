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

  a:hover h2 {
    color: var(--pomegranate-color);
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

  hr {
    border: none;
    height: 1px;
    margin-top: 1rem;
    margin-bottom: 3rem;
    flex-shrink: 0;
    background-color: rgba(0, 0, 0, 0.12);
  }

  @media screen and (max-width: 30em) {
    h2 {
      font-size: 1.25rem;
    }
    ul {
      padding: 0;
    }
    li,
    li a {
      max-width: calc(100% - 1rem);
    }

    li {
      margin-bottom: -2rem;
    }
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
        <Tags tagsList="{post.tag_list}" />
      </a>
      <hr />
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
  import Tags from '../../components/Tags.svelte';
  export let posts;
</script>

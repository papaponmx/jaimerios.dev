<style>
  ul {
    line-height: 1.5;
    list-style-type: none;

    display: grid;
    grid-template-columns: repeat(4, 2fr);
    gap: 1rem;
    padding: 2rem;
  }

  li {
    transition: all 0.3s ease;
    color: var(--mirage-color);
    background-color: var(--baby-powder-color);
    padding: 1rem;
    max-width: 400px;
    border-radius: 20px;
  }

  li:hover {
    cursor: pointer;
  }

  li a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

  li:hover h2 {
    color: var(--pomegranate-color);
  }

  h2 {
    font-size: 1.5rem;
    color: var(--mirage-accent-color);
    font-weight: 800;
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

  @media screen and (max-width: 50em) {
    ul {
      margin: 0 0 1em 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
    h2 {
      font-size: 1.75rem;
    }
    ul {
      padding: 0;
    }
    li,
    li a {
      max-width: calc(100% - 1rem);
    }

    li {
      box-shadow: none;
    }
  }

  @media screen and (min-width: 50em) {
    li:hover {
      box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.25);
      background: linear-gradient(
        138deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 1) 91%,
        var(--pomegranate-color--lighter) 91.1%,
        var(--pomegranate-color--lighter) 100%
      );
    }
  }

  h1 {
    font-size: 5rem;
    font-weight: 800;
    color: var(--mirage-accent-color);
    line-height: 1;
    margin-bottom: 0.5rem;
  }

  @media screen and (min-width: 600px) {
    h1 {
      text-indent: 3rem;
      font-size: 7rem;
      margin-bottom: -1rem;
    }
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1>Latest <wbr /> articles</h1>
<HorizonalRule />
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

<script lang="typescript">
  import HorizonalRule from '../../components/HorizonalRule.svelte';
  import Tags from '../../components/Tags.svelte';

  export let posts;
</script>

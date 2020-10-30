<style lang="scss">
  @import '../../styles/_functions';
  @import '../../styles/_variables';

  ul {
    list-style-type: none;

    display: grid;
    grid-template-columns: repeat(4, 2fr);
    gap: 1rem;
    padding: 0 3rem;
  }
  li {
    border-radius: 20px;
    color: $mirage-color;
    max-width: rvr(25);
    padding: rvr(1);
    transition: all 0.3s ease;
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
    color: $pomegranate-color;
  }

  h2 {
    color: $mirage-accent-color;
    font-size: rvr(1.2);
    font-weight: 800;
  }

  time {
    color: black;
    display: block;
    font-size: 1.25rem;
    font-weight: 200;
    margin-bottom: 0.75rem;
  }

  .row {
    margin-top: -0.65rem;
  }

  .row span {
    color: $mirage-accent-color;
  }

  @media screen and (max-width: 50em) {
    h1 {
      font-size: 3.5rem;
      line-height: 1.25;
    }

    ul {
      margin: 0 0 1rem 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
    h2 {
      font-size: 1.75rem;
      margin-bottom: 0.5;
    }
    ul {
      padding: 0;
    }
    li,
    li a {
      max-width: calc(100% - 2rem);
    }

    li {
      box-shadow: none;
      padding-bottom: 0;
      padding-top: 0;
    }

    time {
      margin-bottom: 0.75rem;
    }
  }

  @media screen and (min-width: 50em) {
    li:hover {
      box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.25);
      background: linear-gradient(
        138deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 1) 91%,
        $pomegranate-color--lighter 91.1%,
        $pomegranate-color--lighter 100%
      );
    }
  }

  h1 {
    color: $mirage-accent-color;
    // font-size: rvr(5);
    font-weight: 800;
    margin-bottom: 0.5rem;
  }

  @media screen and (min-width: 600px) {
    h1 {
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

<script context="module" lang="typescript">
  export function preload({ _params, _query }, session) {
    return this.fetch('/blog.json')
      .then(r => r.json())
      .then((posts: Array<BlogPostPreview>) => {
        return { posts };
      })
      .catch(err => 'Error is ' + JSON.stringify(null, 2, err));
  }
</script>

<script lang="typescript">
  import type { BlogPostPreview } from '../../models/blog-posts-preview.interface';
  import HorizonalRule from '../../components/HorizonalRule.svelte';
  import Tags from '../../components/Tags.svelte';

  export let posts: Array<BlogPostPreview>;
</script>

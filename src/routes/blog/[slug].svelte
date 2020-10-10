<style>
  /*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
  .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }

  .content :global(pre) {
    background-color: #f9f9f9;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  }

  .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
  }

  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }

  :global(.content) {
    font-size: 1.375rem;
    font-weight: 300;
    max-width: 100%;
  }

  :global(.content a) {
    max-width: fit-content;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  :global(blockquote) {
    background: #ededed;
    font-style: italic;
    color: #555555;
    padding: 1.2em 1.25rem 1.2em 1.875rem;
    border-left: 6px solid var(--mirage-accent-color);
  }

  article {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 100vw;
    padding: 0.5rem;
    width: calc(100% - 12.5rem);
  }

  .content {
    align-self: center;
    max-width: 35rem;
  }

  h1 {
    color: var(--mirage-accent-color);
    font-size: 2.5rem;
    font-weight: 400;
    margin-bottom: 0.2rem;
  }

  header {
    max-width: 100%;
    text-align: left;
    width: 35rem;
  }
  @media screen and (max-width: 650px) {
    article {
      min-width: calc(100vw - 2rem);
      margin-left: -1rem;
    }
    header h1 {
      width: calc(100vw - 2.75rem);
    }

    .content {
      display: flex;
      flex-direction: column;
      font-size: 1.2rem;
      margin-left: -1rem;
      max-width: calc(100% - 1.5rem);
    }
  }
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<article>
  {#if post}
    <header>
      <h1>{post.title}</h1>
      <Tags tagsList="{post.tags}" />
      <hr />
    </header>
    <div class="content">
      {@html post.body_html}
    </div>
  {/if}
</article>

<script context="module">
  export async function preload({ params, _query }, session) {
    const URL = 'blog/' + params.slug + '.json';
    const res = await this.fetch(URL);
    const post = await res.json();

    if (res.status === 200) {
      return { post };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Tags from '../../components/Tags.svelte';
  export let post;
</script>

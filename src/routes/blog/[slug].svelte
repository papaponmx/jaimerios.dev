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

  :global(article h1) {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: calc(42px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
  }

  article {
    width: calc(100% - 12.5rem);
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    max-width: 100vw;
    width: calc(100% - 12.5rem);
    justify-content: center;
    align-items: center;
  }

  .content {
    align-self: center;
    max-width: 35rem;
  }

  h1 {
    font-size: 2.75rem;
    color: var(--mirage-accent-color);
    font-weight: 400;
  }

  header {
    width: 35rem;
    max-width: 100%;
    height: calc(100vh - 200px);
    text-align: left;
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

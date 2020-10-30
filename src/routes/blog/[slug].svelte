<style lang="scss">
  @import '../../styles/_variables';
  /*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
  .content :global(h2) {
    font-size: 2.25rem;
    font-weight: 500;
    margin: 0;
    padding-top: 0.5rem;
    color: #444444;
  }
  .content :global(h3) {
    font-size: 2rem;
    line-height: 1.25;
    font-weight: 500;
    margin: 0 0 0.25rem 0;
    padding-top: 0.5rem;
    color: #444444;
  }

  .content :global(p) {
    padding-top: 0.5rem;
    margin-top: 0;
    line-height: 1.25;
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }

  .content :global(pre) {
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  }

  .content :global(hr) {
    margin: 0 0 1rem 0;
    padding: 1rem 0 0 0;
    border-bottom: 0.25rem solid red;
  }

  .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
  }

  .content :global(ul, ol, li) {
    line-height: 1.5;
    font-size: 1.25rem;
    margin: 0 0 0.75rem 0;
  }

  :global(.content) {
    font-size: rvr(1);
    font-weight: 300;
    max-width: 100%;
  }

  .content :global(a) {
    max-width: fit-content;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .content :global(blockquote p) {
    font-size: 1.5rem;
    font-weight: 200;
    line-height: 1.2;
  }
  .content :global(blockquote) {
    background: #ededed;
    font-style: italic;
    color: #555555;
    padding: 1.25rem 1.25rem 0.75rem 1.875rem;
    margin: 1rem 0 0.75rem 0;
    border-left: 6px solid $mirage-accent-color;
  }

  .content :global(pre) {
    margin: 0;
    padding-top: 0.75rem;
    margin-bottom: 1rem;
    font-size: 1.25rem;
    line-height: 1.75;
  }

  article {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 100vw / rvr(1);
    padding: 0 1rem;
    width: calc(100% - rvr(12.5));
  }

  .content {
    align-self: center;
    max-width: rvr(30);
  }

  h1 {
    color: $mirage-accent-color;
    font-size: 4.5rem;
    font-weight: 800;
    margin-bottom: -0.5rem;
    line-height: 1.5;
    width: calc(100vw - 2.75rem);
  }

  header {
    width: rvr(35);
    max-width: 100%;
    text-align: left;
  }
  @media screen and (max-width: 650px) {
    article {
      min-width: calc(100vw - 2rem);
      margin-left: rvr(-1);
    }
    h1 {
      font-size: rvr(3);
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

<script lang="typescript">
  import Tags from '../../components/Tags.svelte';
  export let post;
</script>

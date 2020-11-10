<style lang="scss">
  @import '../styles/_variables';
  .tags--row {
    display: flex;
    flex-wrap: wrap;
    padding-top: 0.25rem;
    max-width: calc(100vw - 1rem);
  }

  .tag {
    margin-right: 0.75rem;
    font-weight: 200;
    font-size: 0.75rem;
    line-height: 1.25;
    margin-bottom: 0.6rem;
    color: $mirage-color;
    border: 1px solid gray;
    padding: 1px 6px;
    border-radius: 25px;
  }
  .tag:hover {
    cursor: default;
  }

  @media screen and (max-width: 400px) {
    .tags--row {
      width: 300px;
      max-width: calc(100vw - 2rem);
    }

    .tag {
      margin-bottom: 1rem;
      padding: 0.25rem 0.5rem;
    }
  }
</style>

<div class="tags--row">
  {#if tagsList}
    {#each tagsList as tag}
      <div class="tag">{tag}</div>
    {/each}
  {/if}
</div>

<script lang="typescript">
  export let tagsList;
</script>

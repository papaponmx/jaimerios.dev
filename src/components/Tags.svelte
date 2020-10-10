<style>
  .tags--row {
    display: flex;
    flex-wrap: wrap;
    /* max-width: calc(100% - calc(var(--spacing-unit) / 4)); */
  }
  .tag {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
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

<div class="tags--row">
  {#if tagsList}
    {#each tagsList as tag}
      <div class="tag">{tag}</div>
    {/each}
  {/if}
</div>

<script>
  export let tagsList;
</script>

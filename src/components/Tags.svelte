<style>
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

<div class="tags__row">
  {#if tagsList}
    {#each tagsList as tag}<span class="tag">{tag}</span>{/each}
  {/if}
</div>

<script>
  export let tagsList;
</script>

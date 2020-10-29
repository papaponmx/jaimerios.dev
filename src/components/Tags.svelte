<style lang="scss">
  @import '../styles/_variables';
  .tags--row {
    display: flex;
    flex-wrap: wrap;
    max-width: calc(100vw - 1rem);
  }

  @media screen and (max-width: 400px) {
    .tags--row {
      width: 300px;
    }
  }

  .tag {
    margin-right: 0.75rem;
    // padding-top: 1.5rem;
    // margin-bottom: 0.5rem;
    font-weight: 200;
    font-size: 0.75rem;
    color: $mirage-accent-color;
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

<script lang="typescript">
  export let tagsList;
</script>

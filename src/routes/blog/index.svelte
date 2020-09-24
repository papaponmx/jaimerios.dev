<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
  {#each posts as post}
    <li><a rel="prefetch" href="blog/{post.slug}">{post.title}</a></li>
  {/each}
</ul>

<script context="module">
  export function preload({ params, query }, session) {
    return this.fetch(`${session.BLOG_API_URL}/articles?username=papaponmx`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }

  // What do I need to do?
  // 1. Set initial blog post to 0
  // 2. Get the next 5 blog posts
  // 3. Update that markup.
  //   4. Get the previous 5
  //
  //
  //
  //
  //
  //
</script>

<script lang="ts">
  export let posts;
</script>

<style>
  h1 {
    /* border-bottom: 0.2px solid var(--twine-color); */
    color: var(--mirage-accent-color);
    font-size: calc(var(--base-font-size) * 7);
    font-weight: 600;
  }

  section {
    color: var(--mirage-color);
    font-weight: 200;
  }

  /* header {
    border: 1px solid gray;
  } */

  hr {
    background-color: var(--pomegranate-color--lighter);
    border: none;
    height: 5px;
    width: 30px;
    margin-top: 9px;
    margin-left: 0;
    margin-right: 0;
  }

  .subheading--row {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: -4rem;
  }

  .subheading--row span {
    text-indent: 10px;
    /* margin-left: 5px; */
    text-transform: uppercase;
    letter-spacing: 0.75px;
  }
</style>

<svelte:head>
  <title>About me</title>
</svelte:head>

<header>
  <h1>About me</h1>
  <div class="subheading--row">
    <hr />
    <span>
      <!-- A self-taught front end developer from Mexico, programming worldwide. -->
      A Web Developer from Mexico, <br /> programming worldwide.
    </span>
  </div>
</header>

<section></section>

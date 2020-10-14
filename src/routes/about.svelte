<style>
  h1 {
    color: var(--mirage-accent-color);
    font-size: calc(var(--base-font-size) * 7);
    font-weight: 800;
  }

  section {
    color: var(--mirage-color);
    font-weight: 300;
  }

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
    text-transform: uppercase;
    letter-spacing: 0.75px;
  }

  p {
    max-width: 550px;
    font-size: 1.25rem;
    letter-spacing: 0.1px;
    line-height: 1.2;
    margin-top: 4rem;
    color: #333333;
    font-weight: 300;
  }
</style>

<svelte:head>
  <title>About me</title>
</svelte:head>

<section>
  <header>
    <h1>About me</h1>
    <div class="subheading--row">
      <hr />
      <span> A Web Developer from Mexico, <br /> programming worldwide. </span>
    </div>
  </header>

  <p>
    I am a self-taught developer who started coding {daysAgo()}. I specialize in
    accessibility and usability without sacrificing performance.
  </p>

  <p>Coding is both my hobbie and my profession</p>
</section>
<Comet />

<script>
  import Comet from './../components/Comet.svelte';

  const daysAgo = () => {
    const startDate = new Date('6/16/2015').getTime();
    const today = new Date().getTime();
    const timeDifference = today - startDate;

    const numberOfDays = Math.round(timeDifference / (1000 * 3600 * 24));
    return `${numberOfDays.toLocaleString()} days ago`;
  };
</script>

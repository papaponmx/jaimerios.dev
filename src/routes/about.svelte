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

  p,
  ul,
  li {
    max-width: 550px;
    font-size: 1.25rem;
    letter-spacing: 0.1px;
    line-height: 1.2;
    color: #333333;
    font-weight: 300;
  }

  article {
    margin-top: 4rem;
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

  <article>
    <p>
      I am a self-taught developer who started coding {daysAgo()}. I specialize
      in accessibility and usability without sacrificing performance.
    </p>

    <p>
      Coding is both my job and my hobbie. On my free timem, I work with a
      select group of colleagues to create amazing webistes.
    </p>

    <p>
      I am passionate about creating accessible, beutiful and engaging webistes
      in order to improve the lifes of the end users.
    </p>

    <p>
      Another activity I am passionate about is teaching others, I like to do
      so:
    </p>
    <ul>
      <li>
        By teaching aspiring developers how to code so they can land their first
        job in tech.
      </li>
      <li>
        Docummenting my journey in <a href="/blog">my blog</a> and sharing with the
        community so others can avoid some of the problems I have faced and grow
      </li>
    </ul>
  </article>
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

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
    margin-top: 18px;
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
    letter-spacing: 0.5px;
    font-size: 28px;
    color: #343434;
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

  section {
    display: grid;
    grid-template-rows: 70vh 20vh 70vh;
    grid-template-columns: repeat(5, auto);
  }

  a {
    color: white;
    text-decoration: none;
  }

  .arrow {
    text-align: center;
    margin: 8% 0;
    grid-area: 2 / -5 / -5 / -6;
  }
  .bounce {
    display: none;
    animation: bounce 3s 3 15s;
    align-self: end;
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      display: block;
      transform: translateY(0);
    }
    40% {
      display: block;
      transform: translateY(-30px);
    }
    60% {
      display: block;
      transform: translateY(-15px);
    }
  }

  header {
    grid-area: 1 / 1 / 2 / 5;
  }

  article {
    text-align: left;
    align-self: center;
    grid-area: 3 / 1/ 3 / 5;
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
  <div class="arrow bounce">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    ><path d="M0 0h24v24H0z" fill="none"></path>
      <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
  </div>
  <article>
    <p>
      I am a self-taught developer who started coding {daysAgo()}. I specialize
      in accessibility and usability without sacrificing performance.
    </p>

    <p>
      Coding is both my job and my hobbie. On my free time, I work with a select
      group of clients to create amazing webistes.
    </p>

    <p>
      I am passionate about creating accessible, beutiful and engaging webistes
      in order to improve the lifes of the end users.
    </p>

    <p>
      Another activity I am passionate about is teaching others, I like to do so
      in a few ways:
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

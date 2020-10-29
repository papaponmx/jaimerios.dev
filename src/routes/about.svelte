<style lang="scss">
  @import '../styles/_variables';
  @import '../styles/_functions';

  h1 {
    color: $mirage-accent-color;
    font-size: rvr(6);
    font-weight: 800;
    margin-bottom: 1rem;
  }

  section {
    color: $mirage-accent-color;
    font-weight: 300;
  }

  hr {
    background-color: $pomegranate-color--lighter;
    border: none;
    height: 5px;
    width: 300px;
    position: absolute;
    margin-bottom: rvr(1.2);
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
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-size: 1.5rem;
    padding-top: 2.25rem;
    color: #343434;
    max-width: calc(100% - 2rem);
  }

  p,
  ul,
  li {
    color: #333333;
    font-size: 1.25rem;
    font-weight: 300;
    letter-spacing: 0.1px;
    margin-bottom: 1.5rem;
    margin-top: 0;
    max-width: 550px;
  }

  section {
    display: grid;
    grid-template-rows: auto 0 70vh;
    grid-template-columns: repeat(5, 1fr);
  }

  a {
    display: inline-block;
    position: relative;
    text-decoration: none;
    color: inherit;
    z-index: 1;
  }

  a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0.07em;
    height: 0.1em;
    width: 100%;
    background: linear-gradient(
      110deg,
      $pomegranate-color--lighter,
      var(--pomegranate-color)
    );
    z-index: -1;
    transition: height 0.25s cubic-bezier(0.6, 0, 0.4, 1);
  }

  a:hover::after {
    height: 0.25em;
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
    padding-top: 3rem;
    text-align: left;
    align-self: center;
    grid-area: 5 / 1 / 3 / 5;
  }

  @media screen and (max-width: 43.75rem) {
    h1 {
      font-size: rvr(5);
      margin-bottom: 7rem;
    }
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

<script lang="typescript">
  const daysAgo = () => {
    const startDate = new Date('6/16/2015').getTime();
    const today = new Date().getTime();
    const timeDifference = today - startDate;

    const numberOfDays = Math.round(timeDifference / (1000 * 3600 * 24));
    return `${numberOfDays.toLocaleString()} days ago`;
  };
</script>

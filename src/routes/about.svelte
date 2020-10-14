<style>
  h1 {
    color: var(--mirage-accent-color);
    font-size: calc(var(--base-font-size) * 7);
    font-weight: 800;
  }

  section {
    color: var(--mirage-color);
    font-weight: 200;
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
    /* margin-left: 5px; */
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
    /* color: var(--mirage-accent-color); */
  }

  svg {
    height: 50px;
    animation: none;
  }

  @media screen and (prefers-reduced-motion: no-preference) {
    @keyframes slide-bl {
      0% {
        transform: translateY(0) translateX(0);
      }
      100% {
        transform: translateY(100vh) translateX(-100vw);
      }
    }
    svg {
      position: absolute;
      right: 0;
      top: 0;

      animation-delay: 10s;
      animation: slide-bl 3.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
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
      <span>
        <!-- A self-taught front end developer from Mexico, programming worldwide. -->
        A Web Developer from Mexico, <br /> programming worldwide.
      </span>
    </div>
  </header>

  <p>
    I am a self-taught developer who has been coding for the web since 2016. I
    specialize in accessibility and usability without sacrificing performance.
  </p>
</section>

<svg
  version="1.1"
  id="Layer_1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  x="0px"
  y="0px"
  viewBox="0 0 289.944 289.944"
  style="enable-background:new 0 0 289.944 289.944;"
  xml:space="preserve"
>
  <g>
    <g>
      <circle
        style="fill:#F9BA48;"
        cx="93.772"
        cy="196.231"
        r="65.599"
      ></circle>
      <path
        style="fill:#333333;"
        d="M282.572,47.663l-49.87,49.87l57.151-90.921l-6.897-6.152l-32.027,25.62l10.936-19.689L255.526,0
			L49.375,112.451c-29.955,16.147-49.317,49.031-49.317,83.78c0,51.674,42.04,93.713,93.713,93.713
			c32.617,0,62.357-16.597,79.572-44.425L289.886,53.407L282.572,47.663z M165.355,240.623
			c-15.477,25.017-42.237,39.95-71.583,39.95c-46.505,0-84.342-37.837-84.342-84.342c0-31.347,17.426-60.998,44.415-75.542
			L245.827,15.973L231.634,41.52l-65.82,52.653l5.857,7.319l66.405-53.126l0.361,0.201l0.487-0.881l28.236-22.59l-88.334,140.528
			l7.933,4.986l23.508-37.401l51.458-51.458L165.355,240.623z"
      ></path>

      <rect
        x="129.309"
        y="90.835"
        transform="matrix(0.8574 -0.5146 0.5146 0.8574 -28.7717 87.193)"
        style="fill:#333333;"
        width="27.32"
        height="9.371"
      ></rect>
      <path
        style="fill:#333333;"
        d="M56.287,196.231h-9.371c0,25.837,21.02,46.857,46.857,46.857v-9.371
			C73.104,233.717,56.287,216.9,56.287,196.231z"
      ></path>
    </g>
  </g>
  <g></g>
  <g></g>
  <g></g>
  <g></g>
  <g></g>
  <g></g>
  <g></g>
  <g></g>
  <g></g>
  <g></g>
  <g></g>
  <g></g>
  <g></g>
  <g></g>
  <g></g>
</svg>

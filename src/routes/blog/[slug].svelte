<style>
  /*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
  .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }

  .content :global(pre) {
    background-color: #f9f9f9;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  }

  .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
  }

  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }

  :global(.content) {
    font-size: 1.375rem;
    font-weight: 300;
    max-width: 100%;
  }

  :global(.content a) {
    max-width: fit-content;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  :global(blockquote) {
    background: #ededed;
    font-style: italic;
    color: #555555;
    padding: 1.2em 1.25rem 1.2em 1.875rem;
    border-left: 6px solid var(--mirage-accent-color);
  }

  article {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 100vw;
    padding: 0.5rem;
    width: calc(100% - 12.5rem);
  }

  .content {
    align-self: center;
    max-width: 35rem;
  }

  h1 {
    color: var(--mirage-accent-color);
    font-size: 2.5rem;
    font-weight: 400;
    margin-bottom: 0.2rem;
  }

  header {
    max-width: 100%;
    text-align: left;
    width: 35rem;
  }
  @media screen and (max-width: 650px) {
    article {
      min-width: calc(100vw - 2rem);
      margin-left: -1rem;
    }
    header h1 {
      width: calc(100vw - 2.75rem);
    }

    .content {
      display: flex;
      flex-direction: column;
      font-size: 1.2rem;
      margin-left: -1rem;
      max-width: calc(100% - 1.5rem);
    }
  }
</style>

<svelte:head>
  <title>{post.title}</title>
  {@html monokaiSublime}
</svelte:head>

<article>
  {#if post}
    <header>
      <h1>{post.title}</h1>
      <Tags tagsList="{post.tags}" />
      <hr />
    </header>
    <div class="content">
      <Highlight language="{typescript}" code="{code}" />
      {@html post.body_html}
      <!-- <Highlight code="{post.body_html}" /> -->
    </div>
  {/if}
</article>

<script context="module">
  let code = `
/**
 * Let's break it down step by step:

 * 1. Define an array of numbers.
 * 2. We declare the reducer function that will be applied to each element of the array.
 * 3. Within the reducer function, if the currentItem is greater than the accumulator, we will return the currentItem.
 * 4. We invoke numbers.reduce() passing our reducer function as a first parameter and 0 as an initial value for our accumulator. * 5. We store the value returned by numbers.reduce() in a variable called average.
 */


const numbers = [3, 4, 10, 1, 4, 3]; // 1.

const reducerFunction = (accumulator, currentItem, currentIndex, sourceArray) => { // 2.
    if (accumulator < currentItem) {
        return currentItem; // 3.
    }
    return accumulator; // 🤓 Notice that the value that we return in the reducer function, will be the value of the accumulator the next time the reducer function is invoked.
}


const highestNumber = numbers.reduce(reducerFunction, 0); // 4 and 5. Notice that 0 is the initial value for our accumulator.

console.log('Highest number is ', highestNumber); // 10
Finding an Average with the Array.reduce
Imagine you have an array of products coming from the back end. In this example we will get the average price of a product in an array.


/**
 * One more time, let's break it down step by step:

 * 1. Define an array of products.
 * 2. We declare the reducer function that will be applied to each element of the array.
 * 3. Within the reducer function, we summ the price of each product to the total.
 * 4. When we reached the last item in the array, we devide it by the number of elements in the array..
 * 5. We invoke products.reduce() passing our reducer function as a first parameter and 0 as an initial value for our accumulator which now is called total.
 * 6. We store the value returned by products.reduce() in a variable called average.

 */
const products = [ // 1.
  {
    name: "apple",
    price: 29.76,
  },
  {
    name: "pineapple",
    price: 41.85,
  },
  {
    name: "melon",
    price: 46.5
  }
];

const reducerFunction = (total, product, index, array) => { // 2.
  total += product.price; // 3.
  if( index === array.length - 1) { // 4.
    return total / array.length;
  } else {
    return total;
  }
}

const average = products.reduce(reducerFunction, 0); //5 and 6.

console.log(average) // 39.37
`;

  export async function preload({ params, _query }, session) {
    const URL = 'blog/' + params.slug + '.json';
    const res = await this.fetch(URL);
    const post = await res.json();

    if (res.status === 200) {
      let parsedArticle = [];
      // TODO: Pase Code here

      const postBody = post.body_html;
      // 1. Find all cases in the string that have a --code
      const codeOpeningString =
        '<div class="highlight"><pre class="highlight javascript"><code>';
      const codeClosingString = '</code></pre></div>';
      const codeOpeningRegEx = /<div class="highlight"><pre class="highlight javascript"><code>/g;
      const codeClosingRegEx = /<\/code><\/pre><\/div>/g;

      const codeOpeningTags = post.body_html.match(codeOpeningString);
      const codeClosingTags = postBody.match(codeClosingString);
      let newPostBody;
      for (const codeOpeningTag of codeOpeningTags) {
        // Extract code
        const startIndex =
          postBody.indexOf(codeOpeningString) + codeOpeningString.length;
        const endIndex = postBody.indexOf(codeClosingString) - 1;
        code = postBody.slice(startIndex, Math.abs(endIndex));
        newPostBody = postBody.replace('code', JSON.stringify(''));
        debugger;

        //         const str = 'Mozilla';

        // console.log(str.substr(1, 2));
        // // expected output: "oz"
      }
      debugger;

      return { post: { ...post, post_body: newPostBody } };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Tags from '../../components/Tags.svelte';
  import { Highlight } from 'svelte-highlight';
  import { typescript } from 'svelte-highlight/languages';
  import { monokaiSublime } from 'svelte-highlight/styles';
  import { debug, each } from 'svelte/internal';

  export let post;
</script>

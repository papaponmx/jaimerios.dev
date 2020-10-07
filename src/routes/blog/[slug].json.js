const fetch = require('node-fetch');

export async function get(req, res) {
  const { DEV_API_KEY } = process.env;
  const { slug } = req.params;
  const URL = 'https://dev.to/api/articles/papaponmx/' + slug;

  fetch(URL, {
    headers: {
      'Content-Type': 'application/json',
      'api-key': DEV_API_KEY,
    },
  })
    .then(r => r.json())
    .then(articles => {
      const posts = articles.filter(post => post.id !== 286357);
      res.end(JSON.stringify([...posts]));
    })
    // IDEA: Parse HTML and add attributes to img tags so they can lazy load on the client.
    .catch(error => console.log('🛑 Error on new_posts endpoint', error));
}

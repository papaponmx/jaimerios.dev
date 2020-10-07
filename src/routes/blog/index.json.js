const fetch = require('node-fetch');

export async function get(req, res) {
  const { BLOG_API_URL, DEV_API_KEY } = process.env;
  const USERNAME = 'papaponmx';
  const URL = `${BLOG_API_URL}/articles?username=${USERNAME}`;

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
    .catch(error => console.log('🛑 Error on new_posts endpoint', error));
}

const fetch = require('node-fetch');

export async function get(req, res) {
  // const USERNAME = 'papaponmx';
  const { DEV_API_KEY } = process.env;
  // const URL = `${BLOG_API_URL}/articles?username=${USERNAME}`;
  const URL = 'https://dev.to/api/articles?username=papaponmx';

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

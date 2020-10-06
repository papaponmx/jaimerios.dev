const fetch = require('node-fetch');

export async function get(req, res) {
  const { BLOG_API_URL, DEV_API_KEY } = process.env;

  const CURRENT_PAGE = 1;
  const PER_PAGE = 5;
  const USERNAME = 'papaponmx';

  // TODO: Implement req.params.currentPage
  const URL = `${BLOG_API_URL}/articles?username=${USERNAME}&page=${CURRENT_PAGE}&per_page=${PER_PAGE}`;
  fetch(URL, {
    headers: {
      'Content-Type': 'application/json',
      'api-key': DEV_API_KEY,
    },
  })
    .then(r => r.json())
    .then(posts => {
      res.end(JSON.stringify([...posts]));
    })
    .catch(error => console.log('🛑 Error on new_posts endpoint', error));
}

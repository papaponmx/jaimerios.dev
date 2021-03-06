const fetch = require('node-fetch');

export async function get(req, res) {
  const { BLOG_API_URL } = process.env;

  const CURRENT_PAGE = 1;
  const PER_PAGE = 5;
  const USERNAME = 'papaponmx';

  // TODO: Implement req.params.currentPage
  const URL = `${BLOG_API_URL}/articles?username=${USERNAME}&page=${CURRENT_PAGE}&per_page=${PER_PAGE}&top=5`;
  fetch(URL)
    .then(r => r.json())
    .then(posts => {
      res.end(JSON.stringify([...posts]));
    })
    .catch(error => console.log('🛑 Error on new_posts endpoint', error));
}

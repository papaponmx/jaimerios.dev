const fetch = require('node-fetch');

export async function get(req, res) {
  const { slug } = req.params;
  const URL = 'https://dev.to/api/articles/papaponmx/' + slug;

  fetch(URL, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(r => r.json())
    .then(article => {
      res.end(JSON.stringify({ ...article }));
    })
    // IDEA: Parse HTML and add attributes to img tags so they can lazy load on the client.
    .catch(error => console.log('🛑 Error on new_posts endpoint', error));
}

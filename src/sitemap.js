require('dotenv').config();

const fs = require('fs');
const fetch = require('node-fetch');

const URL = 'https://dev.to/api/articles?username=papaponmx';
const BASE_URL = process.env.PUBLIC_VERCEL_URL;
const pages = [''];

fs.readdirSync('./src/routes').forEach(file => {
  file = file.split('.')[0];
  if (file.charAt(0) !== '_' && file !== 'sitemap' && file !== 'index') {
    pages.push(file);
  }
});

const render = (pages, posts) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${pages
    .map(
      page => `
    <url><loc>${BASE_URL}/${page}</loc><priority>0.85</priority></url>
  `
    )
    .join('\n')}
      ${
        posts.length > 0 &&
        posts
          .map(
            post => `
    <url>
      <loc>${BASE_URL}/blog/${post.slug}</loc>
      <priority>0.69</priority>
    </url>
  `
          )
          .join('\n')
      }
</urlset>
`;

fetch(URL, {
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(r => r.json())
  .then(posts => {
    const sitemap = render(pages, posts);
    fs.writeFile('./static/sitemap.xml', sitemap, err => {
      err && console.log('🛑 Error generating sitemap', err);
      console.log('✅ Sitemap generated using', process.env.PUBLIC_VERCEL_URL);
    });
  });

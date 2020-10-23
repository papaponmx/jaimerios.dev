require('dotenv').config();

import * as sapper from '@sapper/server';

import compression from 'compression';
import polka from 'polka';
import sirv from 'sirv';

const { PORT, NODE_ENV, BLOG_API_URL } = process.env;
const dev = NODE_ENV === 'development';

polka() // You can also use Express
  .use(
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    sapper.middleware({
      session: () => ({
        BLOG_API_URL,
      }),
    })
  )
  .listen(PORT, err => {
    if (err) console.log('error', err);
  });

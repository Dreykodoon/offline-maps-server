const Koa = require('koa');
const Router = require('koa-router');


const app = new Koa();
const router = new Router();

router
  .get('/', (ctx) => {
    ctx.body = 'Hello, World!';
  });

app
  .use(router.routes());

const port = 8080;

console.log('Listening on port ', port);
app.listen(port);

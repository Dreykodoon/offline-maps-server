const Koa = require('koa');
const Router = require('koa-router');

require('./database');
const TestDAO = require('./test/testDAO');


const app = new Koa();
const router = new Router();

router
  .get('/', async (ctx) => {
    const testObject = await TestDAO.getTestObject();
    ctx.body = testObject.testField;
  });

app
  .use(router.routes());

const port = 8080;

console.log('Listening on port ', port);
app.listen(port);

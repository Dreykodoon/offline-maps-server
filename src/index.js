const Koa = require('koa');
const Router = require('koa-router');

/* Logger must be initialized before database */
const logger = require('./configurations/logger');
require('./configurations/database');

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

logger.info(`Listening on port ${port}`);
app.listen(port);

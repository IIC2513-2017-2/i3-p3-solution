const Koa = require('koa');
const app = new Koa();

const decorator = require('./middleware');

app.use(decorator);

app.use(async (ctx, next) => {
  ctx.type = 'json';
  ctx.body = { user: { name: 'John Doe' } };
});

module.exports = app;

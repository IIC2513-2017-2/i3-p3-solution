const uuid = require('uuid');

const decorator = async (ctx, next) => {
  const prevDate = new Date();
  await next();
  ctx.body = {
    data: ctx.body,
    metadata: {
      timeSpent: new Date() - prevDate,
      requestId: uuid(),
    },
  };
};

module.exports = decorator;

/* Expected answer:

app.use(async (ctx, next) => {
  const prevDate = new Date();
  await next();
  ctx.body = {
    data: ctx.body,
    metadata: {
      timeSpent: new Date() - prevDate,
      requestId: uuid(),
    },
  };
});

*/

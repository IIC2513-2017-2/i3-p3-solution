# Solución P3

[![CircleCI](https://circleci.com/gh/IIC2513-2017-2/i3-p3-solution/tree/master.svg?style=svg)](https://circleci.com/gh/IIC2513-2017-2/i3-p3-solution/tree/master)

## Middleware

```js
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
```

El código de esta solución está en `src/middleware.js`. Este repositorio expone
una aplicación de ejemplo que utiliza este middleware.

## Testing

En la carpeta `test` se encuentra un pequeño ejemplo de testing de esta
solución.

const app = require('./src/app');
const PORT = process.env.PORT || 3000;
app.listen(PORT, error => {
  if (error) {
    return console.error(error);
  }

  console.log(`Listening on port ${PORT}`);
});

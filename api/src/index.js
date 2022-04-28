const app = require('./app');

require('./database');

const port = process.env.PORT;

// starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});

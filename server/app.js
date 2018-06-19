import express from 'express';
import logger from 'morgan';

const app = express();
app.use(logger('dev'));

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.listen(3010, function() {
  console.log('Example app listening on port 3010!');
});



export default app;
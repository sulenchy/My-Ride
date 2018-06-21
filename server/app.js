import express from 'express';
import logger from 'morgan';
import rideOfferRouter from '../server/routes/rideOffer';
import rideController from '../server/controllers/rideOffersController';

const app = express();
app.use(logger('dev'));

app.get('/', function(req, res) {
  res.send('Hello World!');
});


app.use('/rides',rideOfferRouter);
app.get('/rides', rideController.getAllRideOffer)

app.listen(3010, function() {
  console.log('Example app listening on port 3010!');
});



export default app;
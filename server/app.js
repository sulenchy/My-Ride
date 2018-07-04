import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import rideOfferRouter from '../server/routes/rideOffer';
import rideController from '../server/controllers/rideOffersController';


const app = express();

// parse application/x-www-form-urlencoded

app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended:false}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'})); 

app.use(logger('dev'));

app.use('/rideoffer', rideOfferRouter);

app.listen(3010, function() {
  console.log('Listening on port 3010!');
});



export default app;
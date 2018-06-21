import express from 'express';
import rideController from '../controllers/rideOffersController';


const router = express.Router();

router.get('/rides', function(req,res){
    console.log("me");
})
//router.get('/rides', rideController.getAllRideOffer);


//router.get('/rides/:id',rideController.getRideOfferById)

export default router;
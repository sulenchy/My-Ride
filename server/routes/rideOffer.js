import express from 'express';
import rideController from '../controllers/rideOffersController';


const router = express.Router();

router.get('/', (req,res) =>{
    res.status(200)
    .send(`Welcome to my ride`);
})

router.get('/offers', rideController.getAllRideOffer);
router.get('/:id',rideController.getRideOfferById)
router.post('/create',rideController.createNewRideOffer)
router.post('/request/create',rideController.createRequestToJoinRide)

export default router;
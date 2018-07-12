import rideOfferHelper from '../helpers/rideOfferHelper';
// import database from '../models/database';

// const rideOffer = database.rideOffer;

export default class rideOfferController {
    static getAllRideOffer(req, res) {
        rideOfferHelper.getAllRideOffer()
            .then((offer) => {
                if (offer.length == 0) {
                    return res.status(200)
                        .json({
                            data: {
                                Offers: offer,
                                message: 'No Ride Offer available currently'
                            },
                            status: 'success',
                        });
                }

                return res.status(200)
                    .json({
                        data: {
                            Offers: offer,
                            message: 'Ride Offers gotten successfully'
                        },
                        status: 'success'
                    });
            })
            .catch((err) => {
                // res.status(500).send(err.message);
                if (err) {
                    return res.status(404)
                        .json({
                            error: {
                                message: err.message
                            },
                            status: 'fail'
                        })
                }
            });
    }

    static getRideOfferById(req, res) {
        const id = req.params.id;
        rideOfferHelper.getRideOfferById(id)
            .then((offer) => {
                if (offer === undefined) {
                    return res.status(404)
                        .json({
                            message: `Ride ${id} not available`,
                            status: 'fail',
                        });
                }
                return res.status(200)
                    .json({
                        data: {
                            offer,
                        },
                        message: 'Ride Offer gotten successfully',
                        status: 'success',
                    });
            })
            .catch((err) => {
                res.status(500).send(err.message);
            });
    }

    static createNewRideOffer(req, res) {
        const { rideId, email, leaveTime, destination, fare, status } = req.body;
        rideOfferHelper.createNewRideOffer(rideId, email, leaveTime, destination, fare, status)
            .then((newOffer) => {
                if (newOffer === undefined) {
                    return res.status(404)
                        .json({
                            message: 'Undefined rideoffer cannot be created',
                            status: 'fail',
                        });
                }
                return res.status(201)
                    .json({
                        data: {
                            NewOffer: newOffer,
                        },
                        message: 'New ride offer created successfully',
                        status: 'success',
                    });
            })
            .catch((err) => {
                res.status(500).send(err.message);
            });                
    }

    static createRequestToJoinRide (req,res){
        const {id,rideId, email,status} = req.body;
        rideOfferHelper.createRequestToJoinRide(id,rideId,email,status)
            .then((request) => res.status(201) 
                    .json({
                        data:{
                            Request: request,
                        },
                        message: 'New request to join a new ride created successfully',
                        status: 'success',
                      }))                
            .catch((err) => {
                res.status(500).send(err.message);
            });
    }
}
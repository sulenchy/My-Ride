import rideOfferHelper from '../helpers/rideOfferHelper';
// import database from '../models/database';

// const rideOffer = database.rideOffer;

export default class rideOfferController{
    static getAllRideOffer (req,res){        
        rideOfferHelper.getAllRideOffer()
        .then((offer) => {
            if(Object.keys(offer).length == 0){
                return res.status(404)
                .json({
                    message: 'No Ride Offer available',
                    status: 'fail',
                  });
            }
            return res.status(200)
            .json({
                data: {
                  request: Object.keys(offer).length,
                },
                message: 'Ride Offers gotten successfully',
                status: 'success',
              });
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
    }

    static getRideOfferById (req,res){
        const id = req.params.id;
        rideOfferHelper.getRideOfferById(id)
            .then((offer) => {
                if(offer === undefined){
                    return res.status(404)
                    .json({
                        message: 'No Ride Offer available',
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
}
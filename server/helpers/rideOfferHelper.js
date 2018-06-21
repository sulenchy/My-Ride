import database from '../models/database';

export default class rideOfferHelper{
    static getAllRideOffer () {
        return new Promise((resolve,reject)=>{
            resolve(database.rideOffer);
        });        
    };
    
    static getRideOfferById  ( rideOfferId )  {
        return new Promise((resolve,reject)=>{
            resolve(database.rideOffer.rideOfferId);
        });  
    }    
}


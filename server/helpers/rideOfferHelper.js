import database from '../models/database';

export default class rideOfferHelper{
    static getAllRideOffer () {
        return new Promise((resolve,reject)=>{
            resolve(database.rideOffer);
        });        
    };
    
    static getRideOfferById  ( rideOfferId )  {
        return new Promise((resolve,reject)=>{
            let searchedRide = [];
            database.rideOffer.filter(function(ride){
                if(ride.rideId == rideOfferId)
                return searchedRide.push(ride);
            })
            resolve(searchedRide[0]);
        });  
    }
    
    static createNewRideOffer(leaveTime, destination,transportFare){
        return new Promise((resolve,reject)=>{
            const len  = Object.keys(database.rideOffer).length + 1;
            resolve(database.rideOffer[`ride ${len}`] = [
              {leaveTime:`${leaveTime}`, destination:`${destination}`, transportFare: `${transportFare}`}
              ]);            
        });
    }
}


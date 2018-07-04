import database from '../models/database';

export default class rideOfferHelper{
    static getAllRideOffer () {
        return new Promise((resolve, reject)=>{
            let data = database.rideOffer;
            if (data) {
                resolve(data);
            } else {
                reject({
                    message: 'Request unscuessful'
                });
            }
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
    
    static createNewRideOffer(id, email, leaveTime, destination,transportFare, status){
        return new Promise((resolve,reject)=>{
            database.rideOffer.push(
                { 
                    rideId:id,
                    email:email, 
                    leaveTime: leaveTime, 
                    destination: destination, 
                    transportFare: transportFare, 
                    status: status
                });
            resolve(
                    database.rideOffer[database.rideOffer.length-1],
                );        
        });
    }

    static createRequestToJoinRide(id, rideId, email, requestStatus){
        return new Promise((resolve,reject)=>{
             database.request.push(
                {
                    id:id,
                    rideId:rideId, 
                    email:email, 
                    status:requestStatus
                }
            );
            resolve(
                database.request[database.request.length-1]
                );        
        });
    }
}



const database = {
	rideOffer: [
		{ rideId:1, email:"driver1@gmail.com", leaveTime: '12:00 AM', destination: 'Isolo', transportFare: 1000, status: 'Available' },
		{ rideId:2, email:"driver2@gmail.com", leaveTime: '3:00 AM', destination: 'Lagos highland', transportFare: 1000, status: 'Available'}
	],
	request:[
		{id:1,rideid:1, email:"passenger1@gmail.com",status:"placed"},
		{id:2,rideId:2, email:"passenger2@gmail.com", status:"placed"}
	]
};

export default database;
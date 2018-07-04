import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import database from '../models/database';

let should = chai.should();


chai.use(chaiHttp);

describe('Ride Offer', () => {
    beforeEach((done) => { //Before each test we empty the database
        database.rideOffer=[];
        done();
    });

    describe('/rideoffer/offers', () => {
        it('it should return error when no rideOffer is undefined', (done) => {
            database.rideOffer = undefined;
            chai.request(app)
                .get('/rideoffer/offers')
                .type('form')
                .end((err, res) => {
                    res.should.have.status(404);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error')
                    res.body.error.should.have.property('message').eql('Request unscuessful');
                    done();
                });
        });

        it('should GET empty rideOffer when no ride offer exists', (done) => {
            //database.rideOffer=[];
            chai.request(app)
            .get('/rideoffer/offers')
            .type('form')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('data')
                res.body.data.should.have.property('message').eql('No Ride Offer available currently');
                done();
            });
        });

    });

    describe('/rideoffer/create', (done)=>{
        it('it should POST an Offer', (done) => {
            let offer = {                  
                "rideId":3, 
                "email":"driver3@gmail.com", 
                "leaveTime": "3:00 AM", 
                "destination": "Lagos highland", 
                "fare": 1000, 
                "status": "Available"
            };
            chai.request(app)
                .post('/rideoffer/create')
                .send(offer)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    res.body.should.have.property('data');
                    res.body.should.have.property('message').eql('New ride offer created successfully');
                    res.body.data.NewOffer.should.have.property('rideId');
                    res.body.data.NewOffer.should.have.property('email');
                    res.body.data.NewOffer.should.have.property('leaveTime');
                    res.body.data.NewOffer.should.have.property('destination');
                    res.body.data.NewOffer.should.have.property('transportFare');
                    res.body.data.NewOffer.should.have.property('status');
                  done();
                });
          });
    })

});



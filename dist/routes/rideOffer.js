'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _rideOffersController = require('../controllers/rideOffersController');

var _rideOffersController2 = _interopRequireDefault(_rideOffersController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/rides', function (req, res) {
    console.log("me");
});
//router.get('/rides', rideController.getAllRideOffer);


//router.get('/rides/:id',rideController.getRideOfferById)

exports.default = router;
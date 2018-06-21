'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _rideOffer = require('../server/routes/rideOffer');

var _rideOffer2 = _interopRequireDefault(_rideOffer);

var _rideOffersController = require('../server/controllers/rideOffersController');

var _rideOffersController2 = _interopRequireDefault(_rideOffersController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use((0, _morgan2.default)('dev'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use('/rides', _rideOffer2.default);
app.get('/rides', _rideOffersController2.default.getAllRideOffer);
app.get('/rides/:id', _rideOffersController2.default.getRideOfferById);

app.listen(3010, function () {
  console.log('Example app listening on port 3010!');
});

exports.default = app;
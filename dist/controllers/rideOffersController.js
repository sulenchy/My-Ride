'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rideOfferHelper = require('../helpers/rideOfferHelper');

var _rideOfferHelper2 = _interopRequireDefault(_rideOfferHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import database from '../models/database';

// const rideOffer = database.rideOffer;

var rideOfferController = function () {
    function rideOfferController() {
        _classCallCheck(this, rideOfferController);
    }

    _createClass(rideOfferController, null, [{
        key: 'getAllRideOffer',
        value: function getAllRideOffer(req, res) {
            _rideOfferHelper2.default.getAllRideOffer().then(function (offer) {
                if (Object.keys(offer).length == 0) {
                    return res.status(404).json({
                        message: 'No Ride Offer available',
                        status: 'fail'
                    });
                }
                return res.status(200).json({
                    data: {
                        request: Object.keys(offer).length
                    },
                    message: 'Ride Offers gotten successfully',
                    status: 'success'
                });
            }).catch(function (err) {
                res.status(500).send(err.message);
            });
        }
    }, {
        key: 'getRideOfferById',
        value: function getRideOfferById(req, res) {
            var id = req.params.id;
            _rideOfferHelper2.default.getRideOfferById(id).then(function (offer) {
                if (Object.keys(offer).length == 0) {
                    return res.status(404).json({
                        message: 'No Ride Offer available',
                        status: 'fail'
                    });
                }
                return res.status(200).json({
                    data: {
                        offer: offer
                    },
                    message: 'Ride Offer gotten successfully',
                    status: 'success'
                });
            }).catch(function (err) {
                res.status(500).send('err.message ' + id);
            });
        }
    }]);

    return rideOfferController;
}();

exports.default = rideOfferController;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _database = require('../models/database');

var _database2 = _interopRequireDefault(_database);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var rideOfferHelper = function () {
    function rideOfferHelper() {
        _classCallCheck(this, rideOfferHelper);
    }

    _createClass(rideOfferHelper, null, [{
        key: 'getAllRideOffer',
        value: function getAllRideOffer() {
            return new Promise(function (resolve, reject) {
                resolve(_database2.default.rideOffer);
            });
        }
    }, {
        key: 'getRideOfferById',
        value: function getRideOfferById(rideOfferId) {
            return new Promise(function (resolve, reject) {
                resolve(_database2.default.rideOffer.rideOfferId);
            });
        }
    }]);

    return rideOfferHelper;
}();

exports.default = rideOfferHelper;
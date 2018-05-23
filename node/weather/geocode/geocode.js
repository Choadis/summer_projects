const request = require('request');

var geocodeAddress = (address, callback) => {

  var encodedAddress = encodeURIComponent(address);

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
  }, (error, response, body) => {

    if (error) {

      callback('Unable to connect to Google service');

    } else if (body.status === 'ZERO_RESULTS') {

      callback('Unable to find address');

    } else if (body.status === 'OK') {

      var bodyRes = body.results[0];
      var geo = bodyRes.geometry.location;

      callback(undefined, {
        address: bodyRes.formatted_address,
        Latitude: geo.lat,
        Longitude: geo.lng
      });
    }
  }
)};

module.exports.geocodeAddress = geocodeAddress;

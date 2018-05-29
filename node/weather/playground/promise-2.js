const request = require('request');

var geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    var encodedAddress = encodeURIComponent(address);
    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
      json: true
    }, (error, response, body) => {
      if (error) {
        reject('Unable to connect to Google service');
      } else if (body.status === 'ZERO_RESULTS') {
        reject('Unable to find address');
      } else if (body.status === 'OK') {
        var bodyRes = body.results[0];
        var geo = bodyRes.geometry.location;
        resolve({
          address: bodyRes.formatted_address,
          Latitude: geo.lat,
          Longitude: geo.lng
        });
      }
    });
  })
};

  geocodeAddress('Underworld').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
  }, (errorMessage) =>{
    console.log(errorMessage);
  });

const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, res, body) => {
    if (err) {
      callback(err, null);
      return;
    }

    const data = JSON.parse(body);

    if (data.length === 0) {
      callback(`Breed of ${breedName} is not found`, null);
      return;
    }
    
    callback(null, data[0].description);
    return;
  });
};

module.exports = {fetchBreedDescription};
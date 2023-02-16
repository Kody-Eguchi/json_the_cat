const request = require('request');

const url = 'https://api.thecatapi.com/v1/breeds/search?q=sib';

const breedFetcher = function(url) {
  request(url, (err, res, body) => {
    const data = JSON.parse(body);
    console.log(data);
    console.log(typeof data);
  });
};

breedFetcher(url);
const request = require('request');
const args = process.argv.slice(2);
const name = args[0];

// const url = 'https://api.thecatapi.com/v1/breeds/search?q=sib';

const breedFetcher = function(name) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${name}`, (err, res, body) => {
    if (err) {
      console.log(`REQUEST FAILED - ERROR MESSAGE: ${err}`);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log(`Breed of ${name} is no found`);
      return;
    }
    console.log(data[0].description);
    return;
  });
};

breedFetcher(name);


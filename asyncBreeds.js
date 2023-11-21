const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) {
      return functionToRunWhenThingsAreDone(data);
    } else {
      return functionToRunWhenThingsAreDone(undefined);
    }
  });
};

module.exports = breedDetailsFromFile;
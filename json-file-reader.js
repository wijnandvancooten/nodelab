/*2. Create a Module

Yesterday we required the fs module to use in our project (we required the colors module on Monday). 

We can also create own own modules. It is a good practice to do this so that you can divide up functionality into different files .

Each js file should be less than around 100 lines long - to keep features separate and to make debugging easier. 

In this case, we will create a module which parses (reads and converts) our json file data into javascript. 

This is how to create a module:

json-file-reader.js*/

//module.exports = {
    // readFile: function(path, callback) {
// function to return parsed data
//  }
//};

//Then, in our main.js file, we can require the module, to use the functionality.
//var JSONFileReader = require('./json-file-reader'),

//2. 
//a) Now make a new js file in your directory called json-file-reader.js.
//b) Within the json-file-reader.js file, use readFile to create a module which parses json data to javascript

// function to return parsed data
  

//c) You must require the “fs” variable in the json-file-reader.js file too.

//d) Require your new module in your main.js file.

//e) In your main.js file, use your JSONFileReader module to parse the countries.json file.
var fs = require('fs');

module.exports = {
  readFile: function(path, callback) {
      fs.readFile(path, function(error,data){
        return callback(error, JSON.parse(data));
      });
  }
  };
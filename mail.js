/*var http = require("http");

http.createServer(function(request, response) {
    Send the HTTP header
    HTTP Status: 200 : OK
    Content Type: text/plain
   response.writeHead(200, { 'Content-Type': 'text/plain' });

   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(5555);

console.log ('server running http://127.0.0.1:5555/')
*/
// read a txt file
//var fs = require("fs");


//fs.readFile('countries.json', function(err, data) {
//   if (err) return console.error(err);
   //console.log(data);  
   //console.log(JSON.parse(data))  
//  var countryInfo = JSON.parse(data);

//  countryInfo.forEach(function(i){
//        if (countryInfo[i].name == process.argv[2]){
//    console.log(i)
    //console.log( "the country name is: " + countryInfo[i].name);
    //console.log( "the population name is: " + countryInfo[i].population);
    //console.log( "the region name is: " + countryInfo[i].region);
//  }}); 



var JSONFileReader = require('./json-file-reader'),
    ourArgument = process.argv[2];


JSONFileReader.readFile('countries.json', function(error, data) {
  var country;

  if (error) {
    throw error;
  }

  data.forEach(function(element) {
    if (element.name === ourArgument) {
      country = element;
    } 
  });
    console.log(country);
    if (!country){
      console.log("country cannot be found. Sorry Bob")
    } 
});


   //onsole.log(countryInfo[0].latlng[1]); 
  /* for (var i = 0; i < countryInfo.length; i++) {
       //console.log(JSON.parse(data)  
  if (countryInfo[i].name === process.argv[2]){
    
    console.log( "the country name is: " + countryInfo[i].name);
    console.log( "the population name is: " + countryInfo[i].population);
    console.log( "the region name is: " + countryInfo[i].region);
  }
}
  //console.log(process.argv[2])


});



//console.log("Program Ended");

//process.argv.forEach((val, index) => {
//    console.log(`${index}: ${val}`);
//});

//const name = process.argv[2] + ' ' + process.argv[3];
//console.warn(`Goodmorning ${name}, welcome back`);

// alternatief om naam door te geven. Door onderstaande script te gebruiken krijg je geen undifined bij het niet doorgeven van twee waardes.
//process.argv.forEach((val, index) => {
//    console.log(`${index}: ${val}`);
//});


//if (process.argv[2]) {
//    var name = process.argv[2];
//    if (process.argv[3]) {
//        name = name + ' ' + process.argv[3];
//    }
//    console.warn(`Goodmorning ${name}, welcome back`);
//}

//////
//GLOBAL DECLARATION STUFF
//////
//var countryname = process.argv[2] //deze command geeft de input van de tweede positie in de terminal
//var fs = require ( 'fs' ) //fs = filesheet - variable fs is de module --> require filesystem module. (om in een file te readen)
//var modulenaam = require ('padnaarmodule zoals bij readfile')
/*
////////
//FUNCTION THAT READS AND LOOPS JSON COUTNRY file
///////
//fs.readFile( './countries.json', function ( error, filedata) { //in de module gebruik ik de functie ReadFile
  //make sure errors are visible in console
  if (error ) {
    console.log ( "Something is up! Details: " + error )
    throw error
  }
  //store our file data in var as json

  var jsondata = JSON.parse ( filedata ) //<-- PARSEN
  //console.log ( jsondata ) //<-- PARSEN

  /////////////
  ///LOOPS THROUGH THE JSON FILE TO MATCH COUNTRY PARAMETER
  ////////////
  jsondata.forEach ( function ( country ) {
    if ( country.name == countryname ) {

      //possibly clients wants to output all info?
      console.log ( 'Country: ' + country.name )
      console.log( 'capital: ' + country.capital ) 
      console.log( 'population: ' + country.population )//The tld field is an array and may contain more
      //console.log( 'capital :' + country.capital etc)
    }
  })
})*/
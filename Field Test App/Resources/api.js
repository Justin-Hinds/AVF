

// Functions for search results
var venueSearch = function(cords){
	var url1 = "https://api.foursquare.com/v2/venues/search?client_id=CWLTIZER05DQYJCRNM1QEGAI15DAWEQ0KD5LUAB40TZGMCZ3&client_secret=F21RXBVX2EA4OKRU4HQGUGMX2ZP0RIHFBDR5YTXZJCGIFWWQ&v=20150724&ll=" + "cords.lat" + 
	"," + "cords.lon" + "&query=" + ui.query;
	 var getData1 = Ti.Network.createHTTPClient({
     	onload: function(e){
         
          var json = JSON.parse(this.responseText); 
          var info = {};
        var venArray = [];
       for (i=0; i <json.response.venues.length; i++){
      var fCast ={ 	
       	name:json.response.venues[i].name,
       	phone:json.response.venues[i].contact.formattedPhone,
       	address:json.response.venues[i].loacation.formattedAddress,
       	distance:json.response.venues[i].location.distance
       };	
       venArray.push(fCast);
  };
 		ui.searchRes(venArray);
     },    
     	onerror: function(e){
    alert("There is a problem retrieving current data. Please check your network settings.");
     	},
     	timeout: 10000
     });
      getData1.open("GET", url1);
     getData1.send();	
};

//function for home page info
var venueInfo = function(cords){
	var url = "https://api.foursquare.com/v2/venues/search?client_id=CWLTIZER05DQYJCRNM1QEGAI15DAWEQ0KD5LUAB40TZGMCZ3&client_secret=F21RXBVX2EA4OKRU4HQGUGMX2ZP0RIHFBDR5YTXZJCGIFWWQ&v=20150724&ll=" + cords.lat + 
	"," + cords.lon;

     var getData = Ti.Network.createHTTPClient({
     	onload: function(e){     
          var json = JSON.parse(this.responseText); 
          var info = {};
	        var venArray = [];
	       for (i=0; i <5; i++){
	      var fCast ={ 	
	       	name:json.response.venues[i].name,
	       	phone:json.response.venues[i].contact.formattedPhone,
	       	address:json.response.venues[i].location.address,
	       	city:json.response.venues[i].location.city,
	       	state:json.response.venues[i].location.state,
	       	postalCode:json.response.venues[i].location.postalCode,
	       	distance:json.response.venues[i].location.distance
	       };	
	     
	       venArray.push(fCast);
	  };

 var local = require("local");
 	local.save(venArray);
 	arrowDB.save(venArray);
     },  
     	onerror: function(e){
    alert("There is a problem retrieving current data. Please check your network settings.");
    local.read();
     	},
     	timeout: 10000
     });
      getData.open("GET", url);
     getData.send();
};


exports.venueInfo = venueInfo;
exports.venueSearch = venueSearch;
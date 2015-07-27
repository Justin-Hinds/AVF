var api = require("api");
// Function for Geolocation
var runGeoSearch = function(){
	Ti.Geolocation.purpose = " "; 
	console.log(Ti.Platform.osname);
	if(Ti.Platform.osname === "android"){
		var cordsInfo = {
			lat: "46.6522" ,
			lon: '-120.5350'
		};
	}else{
	Ti.Geolocation.getCurrentPosition(function(e){ 
		var cordsInfo = {
			lat: e.coords.latitude,
		    lon: e.coords.longitude
		};   
      api.venueSearch(cordsInfo);
      
	});
		};
};

var runGeo = function(){
	Ti.Geolocation.purpose = " "; 
	console.log(Ti.Platform.osname);
	if(Ti.Platform.osname === "android"){
		var cordsInfo = {
			lat: "46.6522" ,
			lon: '-120.5350'
		};
	}else{
	Ti.Geolocation.getCurrentPosition(function(e){ 
		var cordsInfo = {
			lat: e.coords.latitude,
		    lon: e.coords.longitude
		};   
      api.venueInfo(cordsInfo);
	});
		};
};
runGeo();
exports.runGeoCode = runGeo;
exports.geoSearch = runGeoSearch;
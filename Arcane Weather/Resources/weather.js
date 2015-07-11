var weatherInfo = function(cords){
var wApi = {
	geoLook: "http://api.wunderground.com/api/a533683612fcf770/geolookup/q/" + cords.lat + "," + cords.lon + ".json",
	conditions: "http://api.wunderground.com/api/a533683612fcf770/conditions/q/"+ cords.lat + "," + cords.lon + ".json",
	wAlert: "http://api.wunderground.com/api/a533683612fcf770/alerts/q/IA/"+ cords.lat + "," + cords.lon + ".json",
	sunriseSet: "http://api.wunderground.com/api/a533683612fcf770/astronomy/q/"+ cords.lat + "," + cords.lon + ".json",
	forecast: "http://api.wunderground.com/api/a533683612fcf770/forecast/q/" + cords.lat + "," + cords.lon + ".json",
};
if (Ti.Network.online) {
     var getSunrise = Ti.Network.createHTTPClient();
     getSunrise.onload = function(e){
         //console.log(e); 
         var json = JSON.parse(this.responseText);
         var info = {  
           forecast : json.forecast,
           location : json.location,
           sunrise : json.moon_phase          
        };
        ui.bUi(info);
console.log(info.sunrise.sunrise.hour);
     };
     getSunrise.open("GET", wApi.sunriseSet);
     getSunrise.send();
} else {
     alert("Network currently unavailable. Please check settings.");
     
}; 
};
exports.weatherInfo = weatherInfo;
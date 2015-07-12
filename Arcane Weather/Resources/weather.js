var weatherInfo = function(cords){
// poor setUp for variables, didn't have time to clean up
var wApi = {
	geoLook: "http://api.wunderground.com/api/a533683612fcf770/geolookup/q/" + cords.lat + "," + cords.lon + ".json",
	conditions: "http://api.wunderground.com/api/a533683612fcf770/conditions/q/"+ cords.lat + "," + cords.lon + ".json",
	wAlert: "http://api.wunderground.com/api/a533683612fcf770/alerts/q/IA/"+ cords.lat + "," + cords.lon + ".json",
	sunriseSet: "http://api.wunderground.com/api/a533683612fcf770/astronomy/q/"+ cords.lat + "," + cords.lon + ".json",
	forecast: "http://api.wunderground.com/api/a533683612fcf770/forecast/geolookup/q/" + cords.lat + "," + cords.lon + ".json",
};
// network check and HTTPClient
if (Ti.Network.online) {
    
      var getForecast = Ti.Network.createHTTPClient();
     getForecast.onload = function(e){
        
         var json = JSON.parse(this.responseText);
         var info = {  
           forecast : json.forecast,
           location : json.location,
           sunrise : json.moon_phase          
        };
        ui.bUi(info);
//console.log(info.forecast);
     };
     getForecast.open("GET", wApi.forecast);
     getForecast.send();
} else {
     alert("Network currently unavailable. Please check settings.");
     
}; 
};
exports.weatherInfo = weatherInfo;
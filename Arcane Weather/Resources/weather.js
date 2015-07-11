var weatherInfo = function(cords){
var wApi = {
	geoLook: "http://api.wunderground.com/api/a533683612fcf770/geolookup/q/" + cords.lat + "," + cords.lon + ".json",
	conditions: "http://api.wunderground.com/api/a533683612fcf770/conditions/q/"+ cords.lat + "," + cords.lon + ".json",
	wAlert: "http://api.wunderground.com/api/a533683612fcf770/alerts/q/IA/"+ cords.lat + "," + cords.lon + ".json",
	sunriseSet: "http://api.wunderground.com/api/a533683612fcf770/astronomy/q/"+ cords.lat + "," + cords.lon + ".json",
	forecast: "http://api.wunderground.com/api/a533683612fcf770/forecast/q/" + cords.lat + "," + cords.lon + ".json",
};
if (Ti.Network.online) {
     var getWeather = Ti.Network.createHTTPClient();
     getWeather.onload = function(e){
         //console.log(e); 
         var json = JSON.parse(this.responseText);
         var info = {
        
           forecast : json.forecast,
           location : json.location,
           sunrise : json.moon_phase
           
        };
console.log(info.sunrise.sunrise.hour);
     };
     getWeather.open("GET", wApi.conditions);
     getWeather.open("GET", wApi.forecast);
     getWeather.open("GET", wApi.wAlerts);
     getWeather.open("GET", wApi.sunriseSet);
     getWeather.send();
} else {
     alert("Network currently unavailable. Please check settings.");
     
}; 
};
exports.weatherInfo = weatherInfo;
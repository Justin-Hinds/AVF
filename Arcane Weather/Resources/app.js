var weath = require("weather").save;
var getGeo = require("geo").runGeoCode;
var net = require("netCheck");
var ui = require("ui");



var networkCheck = function(cords){
var url = "http://api.wunderground.com/api/a533683612fcf770/forecast10day/geolookup/conditions/q/" + cords.lat + "," + cords.lon + ".json";
if (Ti.Network.online) {
     var getData = Ti.Network.createHTTPClient({
     	timeout: 10000
     });
     
     getData.onload = function(e){
         
          var json = JSON.parse(this.responseText); 
          var info = {  
           city : json.location.city,
           state : json.location.state,    
         currentWeat: json.current_observation.weather,  
         currentTemp: json.current_observation.temp_f,
         currentWinds: json.current_observation.wind_mph,
         currentPrecip: json.current_observation.precip_today_metric,
         currentIcon: json.current_observation.icon_url
        };;
        var tenDay = [];
       for (i=0; i <5; i++){
      var fCast ={ 	
       	day: json.forecast.simpleforecast.forecastday[i].date.weekday_short,
       	hi: json.forecast.simpleforecast.forecastday[i].high.fahrenheit,
       	lo: json.forecast.simpleforecast.forecastday[i].low.fahrenheit,
       	icon: json.forecast.simpleforecast.forecastday[i].icon_url
       };	
       tenDay.push(fCast);
  };
  var trueCast = {
  	tenDayCast: tenDay
  };
        info.forecast = trueCast;
        weath(info);

     };
     getData.open("GET", url);
     getData.send();
} else {
     alert("Network currently unavailable. Please check settings.");
     
	}; 
};



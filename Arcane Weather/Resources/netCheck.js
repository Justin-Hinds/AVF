
var networkCheck = function(cords){
var url = "http://api.wunderground.com/api/a533683612fcf770/forecast/q/" + cords.lat + "," + cords.lon + ".json";
if (Ti.Network.online) {
     var getData = Ti.Network.createHTTPClient();
     getData.onload = function(e){
         //console.log(e); 
          var json = JSON.parse(this.responseText); 
          var forecast = json.forecast;
          var location = json.location;
//console.log(forecast);
     };
     getData.open("GET", url);
     getData.send();
} else {
     alert("Network currently unavailable. Please check settings.");
     
}; 
};

exports.networkCheck = networkCheck;
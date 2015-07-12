Ti.UI.setBackgroundColor("fff");

var win = Ti.UI.createWindow({
	layout: "vertical"
	
});
var bUi = function(info){

	// could not get this for loop to work
	
	for(i = 0; i < info.forecast.simpleforecast.forecastday.length; i++){
	var forecastView = Ti.UI.createView({
		backgroundColor: "red",
		height: "20%", 
		top: 20,
		width: "80%",
		viewShadowColor: "373737",
		viewShadowRadius: 6,
		viewShadowOffset:(-5,-10),
		layout: "vertical"
	 });
	 var currentCity = Ti.UI.createLabel({
	 	text: info.location.city,
	 	top: 10,
	 	left: 15
	 });
	 var forecastDate =Ti.UI.createLabel({
	 	text: info.forecast.simpleforecast.forecastday[i].date.weekday + " " + info.forecast.simpleforecast.forecastday[i].date.monthname + ", " + info.forecast.simpleforecast.forecastday[i].date.day,
	 	top: -40,
	 	left: 15
	 });
	  var forecastCondition =Ti.UI.createLabel({
	  	text: info.forecast.simpleforecast.forecastday[i].conditions,
	  	top: -5,
	  	right: 15
	  });
	  var forecastTemp =Ti.UI.createLabel({
	  	text:"Low " + info.forecast.simpleforecast.forecastday[i].low.fahrenheit + " " + "High " + info.forecast.simpleforecast.forecastday[i].high.fahrenheit,
	  	top: -5,
	  	right: 15
	  });
	 win.add(forecastView);
forecastView.add( currentCity, forecastTemp, forecastCondition, forecastDate );
 console.log(info.location.city);
console.log(info.forecast.simpleforecast.forecastday[i].date.weekday + " " + info.forecast.simpleforecast.forecastday[i].date.monthname + ", " + info.forecast.simpleforecast.forecastday[i].date.day);
console.log(info.forecast.simpleforecast.forecastday[i].conditions);
console.log("Low " + info.forecast.simpleforecast.forecastday[i].low.fahrenheit + " " + "High " + info.forecast.simpleforecast.forecastday[i].high.fahrenheit);
 };
 	

	





};

 win.open();
 exports.bUi = bUi;
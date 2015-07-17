Ti.UI.setBackgroundColor("fff");

var win = Ti.UI.createWindow({
	layout: "vertical"
	
});
var fFont;
var cFont;
//function for Weather cards
var bUi = function(info){	
console.log(info);
	 var currentLoca = Ti.UI.createLabel({
	 	text: info.city + ", " + info.state,
	 	top: 10,
	 	left: 15,
	 	font: { fontSize: 34, fontFamily: "Futura-Medium"},
	 });
	 var winds = Ti.UI.createLabel({
	 	text: info.currentWinds,
	 	top: 10,
	 	left: 15,
	 	font: { fontSize: 34, fontFamily: "Futura-Medium"},
	 });
	 var precip = Ti.UI.createLabel({
	 	text: info.currentPrecip,
	 	top: 10,
	 	left: 15,
	 	font: { fontSize: 34, fontFamily: "Futura-Medium"},
	 });
	 var temp = Ti.UI.createLabel({
	 	text: info.currentTemp,
	 	top: 10,
	 	left: 15,
	 	font: { fontSize: 34, fontFamily: "Futura-Medium"},
	 });
	 var conditonsC = Ti.UI.createLabel({
	 	text: info.currentWeath,
	 	top: 10,
	 	left: 15,
	 	font: { fontSize: 34, fontFamily: "Futura-Medium"},
	 });
	 var forecastView = Ti.UI.createView({
		backgroundColor: "aed6f0",
		height: "20%", 
		top: 20,
		width: "80%",
		viewShadowColor: "373737",
		viewShadowRadius: 6,
		viewShadowOffset:(-5,-10),
		layout: "horizontal"
	 });
	  var currentView = Ti.UI.createView({
		backgroundColor: "aed6f0",
		height: "20%", 
		top: 20,
		width: "80%",
		viewShadowColor: "373737",
		viewShadowRadius: 6,
		viewShadowOffset:(-5,-10),
		//layout: "vertical"
	 });
	 var currentImage = Ti.UI.createImageView({
		backgroundColor: "aed6f0",
		image: info.currentIcon,
		height: "20%", 
		top: 20,
		width: "80%",
		viewShadowColor: "373737",
		viewShadowRadius: 6,
		viewShadowOffset:(-5,-10),
		//layout: "vertical"
	 });
	 currentView.add(currentLoca, winds, precip, temp,currentImage,condtionsC);
		// loop for Weather card
	for(i = 0; i < 5; i++){
		var forecastDay =Ti.UI.createLabel({
	 	text: info.forecast[i].day,
	 	top: 5,
	 	left: 15
	 });
		var forecastHi =Ti.UI.createLabel({
	  	text:"High: " + info.forecaste[i].hi,
	  	top: 5,
	  	left: 15,
	  	font: {fontSize: 26, fontStyle: "Optima-ExtraBlack"}
	  });
		var forecastlo =Ti.UI.createLabel({
	  	text:"Low: " + info.forecaste[i].lo ,
	  	top: 5,
	  	left: 15,
	  	font: {fontSize: 26, fontStyle: "Optima-ExtraBlack"}
	  });
		var forecastImage = Ti.UI.createImageView({
		backgroundColor: "aed6f0",
		image: info.forecast[i].icon,
		height: "20%", 
		top: 20,
		width: "80%",
		viewShadowColor: "373737",
		viewShadowRadius: 6,
		viewShadowOffset:(-5,-10),
		//layout: "vertical"
	 });
		var forecastTextView = Ti.UI.createView({
		backgroundColor: "aed6f0",
		height: "15%", 
		top: 20,
		width: "15%",
		opacity: 0.5,
		// shadow for forecast text
		viewShadowColor: "373737",
		viewShadowRadius: 6,
		viewShadowOffset:(-5,-10),
		layout: "vertical"
	 });
	 forecastTextView.add(forecastDay, forecastImage, forecastHi, forecastlo);
	 forecastView.add(forecastTextView);
forecastView.add( currentCity, forecastDate, forecastTemp, forecastCondition );

 };
 	
win.add(forecastView, currentView);
	





};

 win.open();
 exports.bUi = bUi;
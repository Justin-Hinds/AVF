Ti.UI.setBackgroundColor("000");

var win = Ti.UI.createWindow({
	
});
var view = Ti.UI.createView({
	backgroundColor: "white",
	
});
win.add(view);

var getGeo = require("geo").runGeoCode;
var weath = require("weather");
var net = require("netCheck");
 win.open();

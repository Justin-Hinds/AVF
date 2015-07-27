Ti.UI.setBackgroundColor = "white";
var ui = require("ui");
var geo = require("geo");
var api = require("api");
var local = require("local");	
	if (Ti.Network.online) {
		var arrowDB = require("arrowDB");
		arrowDB.loginUser();
	}else{
		
	};






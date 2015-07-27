// function to get location
var runGeo = function(){
	Ti.Geolocation.purpose = " "; 
	
	Ti.Geolocation.getCurrentPosition(function(e){ 
		if(Ti.Platform.osname === "android"){
			Ti.Geolocation.accuracy = "ACCURACY_HIGH";
		};
		var cordsInfo = {
			lat: e.coords.latitude,
		    lon: e.coords.longitude
		};   
      net.netCheck(cordsInfo);
	});
		
};
runGeo();
exports.runGeoCode = runGeo;

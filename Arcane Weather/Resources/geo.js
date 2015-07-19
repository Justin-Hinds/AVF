// function to get location
var runGeo = function(){
	Ti.Geolocation.purpose = " "; 
	
	if (Ti.Platform.osname === "android"){
		var cordsInfo = {
			lat:46.6522,
			lon: -120.5350
		};
	}else{
	Ti.Geolocation.getCurrentPosition(function(e){ 
		var cordsInfo = {
			lat: e.coords.latitude,
		    lon: e.coords.longitude
		};
          
       networkCheck(cordsInfo);
	});
	};
};
runGeo();
exports.runGeoCode = runGeo;

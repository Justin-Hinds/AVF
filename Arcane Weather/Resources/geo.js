// function to get location
var runGeo = function(){
	Ti.Geolocation.purpose = " "; 
	Ti.Geolocation.getCurrentPosition(function(e){ 
		var cordsInfo = {
			lat: e.coords.latitude,
		    lon: e.coords.longitude
		};
          
       networkCheck(cordsInfo);
	});
	
};
runGeo();
exports.runGeoCode = runGeo;

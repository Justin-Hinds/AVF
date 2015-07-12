// function to get location
var runGeo = function(){
	Ti.Geolocation.purpose = " "; 
	Ti.Geolocation.getCurrentPosition(function(e){
		 //console.log(e); 
		var cordsInfo = {
			lat: e.coords.latitude,
		    lon: e.coords.longitude
		};
          // console.log(cordsInfo.lat);
          // console.log(cordsInfo.lon);
        net.networkCheck(cordsInfo);
        weath.weatherInfo(cordsInfo);
	});
	
};
runGeo();
exports.runGeoCode = runGeo;

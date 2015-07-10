var runGeo = function(){
	Ti.Geolocation.purpose = " "; 
	Ti.Geolocation.getCurrentPosition(function(e){
		 console.log(e); 
		var lat = e.coords.latitude;
		var lon = e.coords.longitude;
          
	});
};
runGeo();
exports.runGeoCode = runGeo;

var wApi = {
	geoLook: "http://api.wunderground.com/api/a533683612fcf770/geolookup/q/" + lat + "," + lon + ".json",
	conditions: "http://api.wunderground.com/api/a533683612fcf770/conditions/q/"+ lat + "," + lon + ".json",
	wAlert: "http://api.wunderground.com/api/a533683612fcf770/alerts/q/IA/"+ lat + "," + lon + ".json",
	sunriseSet: "http://api.wunderground.com/api/a533683612fcf770/astronomy/q/"+ lat + "," + lon + ".json",
	forecast: "http://api.wunderground.com/api/a533683612fcf770/forecast/q/" + lat + "," + lon + ".json",
};

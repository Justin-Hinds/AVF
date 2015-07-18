var read = function(){
	var db = Ti.Database.open("weatherData");
	var rowData = db.execute("SELECT city, state, currentTemp, currentWeath, currentPrecip, currentWinds, currentIcon, forecast FROM weatherCast");
		var rowCount = rowData.rowCount;
				console.log(rowData.fieldByName("city"));

		console.log(rowCount);
		while(rowData.isValidRow()){
		var dbD = {
			city: rowData.fieldByName("city"),
			state: rowData.fieldByName("state"),
			currentTemp: rowData.fieldByName("currentTemp"),
			currentWeath: rowData.fieldByName("currentWeath"),
			currentPrecip: rowData.fieldByName("currentPrecip"),
			currentWinds: rowData.fieldByName("currentWinds"),
			currentIcon: rowData.fieldByName("currentIcon"),
			forecast: JSON.parse(rowData.fieldByName("forecast"))
			};
			rowData.next();
		};
		console.log(dbD);
		rowData.close;
		db.close;
		ui.bUi(dbD);
};

var save = function(weathIn){
	console.log(JSON.stringify(weathIn.forecast));
	var db = Ti.Database.open("weatherData");

	db.execute("CREATE TABLE IF NOT EXISTS weatherCast(id INTEGER PRIMARY KEY, city TEXT, state TEXT, currentTemp TEXT, currentWeath TEXT, currentPrecip TEXT, currentWinds TEXT, currentIcon TEXT, forecast TEXT ) ");
	db.execute("DELETE FROM weatherCast");
	db.execute("INSERT INTO weatherCast (city, state, currentTemp, currentWeath, currentPrecip, currentWinds, currentIcon, forecast) VALUES(?,?,?,?,?,?,?,?)", weathIn.city, weathIn.state, weathIn.currentTemp, weathIn.currentWeat, weathIn.currentPrecip, weathIn.currentWinds, weathIn.currentIcon, JSON.stringify(weathIn.forecast) );
	var rowId = db.lastInsertRowId;
	console.log("row id" + rowId);
	
	db.close(); 
	read();
	
	
};
 exports.save = save;
 exports.read = read;
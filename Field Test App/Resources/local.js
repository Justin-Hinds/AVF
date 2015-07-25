var save = function(venIn){
	console.log(JSON.stringify(weathIn.forecast));
	var db = Ti.Database.open("venueData");

	db.execute("CREATE TABLE IF NOT EXISTS venueTBL(id INTEGER PRIMARY KEY, name TEXT, phone TEXT, address TEXT, distance TEXT) ");
	db.execute("DELETE FROM weatherCast");
	for(i=0; i <5; i++){
		db.execute("INSERT INTO weatherCast (name, phone, address, distance) VALUES(?,?,?,?)",venIn[i].name, venIn[i].phone, venIn[i].address, venIn[i].distance  );
	};
	var rowId = db.lastInsertRowId;
	console.log("row id" + rowId);
	
	db.close(); 
	read();
	
	
};
 exports.save = save;
 exports.read = read;
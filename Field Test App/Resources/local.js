var read = function(){
	var db = Ti.Database.open("venueData");
	var rowData = db.execute("SELECT name, phone, address, city, state, postalCode, distance FROM venueTBL");
		var rowCount = rowData.rowCount;
		var apiArray = [];
		console.log(rowCount);
		while(rowData.isValidRow()){
		var dbD = {
			name: rowData.fieldByName("name"),
			phone: rowData.fieldByName("phone"),
			address: rowData.fieldByName("address"),
			city: rowData.fieldByName("city"),
			state: rowData.fieldByName("state"),
			postalCode: rowData.fieldByName("postalCode"),
			distance: rowData.fieldByName("distance"),
			};
			apiArray.push(dbD);
			rowData.next();
		};
		rowData.close;
		db.close;
		ui.bUi(dbD);
};

var save = function(venIn){
	
	var db = Ti.Database.open("venueData");

	db.execute("CREATE TABLE IF NOT EXISTS venueTBL(id INTEGER PRIMARY KEY, name TEXT, phone TEXT, address TEXT, distance TEXT) ");
	for(i=0; i <5; i++){
		db.execute("INSERT INTO venueTBL (name, phone, address, city, state, postalCode, distance) VALUES(?,?,?,?,?,?,?)",venIn[i].name, venIn[i].phone, venIn[i].address, venIn[i].city, venIn[i].state, venIn[i].postalCode, venIn[i].distance  );
	};
	var rowId = db.lastInsertRowId;
	console.log("row id" + rowId);
	
	db.close(); 
	read();
	
	
};
 exports.save = save;
 exports.read = read;
// load the Cloud Module
var Cloud = require('ti.cloud');
// set .debug property to 'true' as we are in Development mode
Cloud.debug = true;
var loginUser = function(){
	Cloud.Users.login({
		login: 'admin-authenticate',
		password: '12345'
	}, function(e){
		// use .info method to view login info in the Console, if successful
		if (e.success){
			
			var user = e.users[0];
			
		} else {
			alert((e.error && e.message) || JSON.stringify(e));
		}
	});
}; 
// Cloud save function
var save = function(apiArray){
	for(i= 0; i< apiArray.length; i++){
		Cloud.Objects.create({
			classname: "venues",
			fields:{
				name:apiArray[i].name,
				address:apiArray[i].address,
				city: apiArray[i].city,
				state: apiArray[i].state,
				postalCode: apiArray[i].postalCode,
				phone:apiArray[i].phone
			}
		}, function(e){
			if(e.success){
			
			}else{
				
			}
		});
	}
	
};
exports.save = save;
exports.loginUser = loginUser;
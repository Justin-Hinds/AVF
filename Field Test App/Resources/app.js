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
			console.log(e);
			var user = e.users[0];
			
		} else {
			alert((e.error && e.message) || JSON.stringify(e));
		}
	});
}; // loginUser ends
loginUser();
 var win = Ti.UI.createWindow({
 	backgroundColor: "fff"
 });
win.open();

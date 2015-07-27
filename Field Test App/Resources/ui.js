// windows
var loginWin = Ti.UI.createWindow({
	backgroundColor: "f0ab25",
	opacity: "80%"
});
var win = Ti.UI.createWindow({
 	backgroundColor: "fff"
 });
var venWin = Ti.UI.createWindow({
	backgroundColor: "f0ab25",
	opacity: "80%"
});
var venView = Ti.UI.createScrollView({
	top: 40,
	layout:"vertical",
	showVerticalScrollIndicator: "true",
	backgroundColor: "d3d3d3"
});
venView.addEventListener("click", function(e){
	getFinish(e.source);
});
//loop for scroll view 
var searchRes = function(api){
	for(var i=0; i< api.length; i++){
		var view = Ti.UI.createView({
			top: 10,
			height: 80,
			width: "90%",
			backgroundColor:"e7f5fd",
			borderWidth: 1,
			borderColor: "#fff",
			name:api[i].name,
			phone: api[i].phone,
			address: api[i].address
		});
		var venName = Ti.UI.createLabel({
			text: api[i].name,
			color: "000",
			font: {fontFamily: "HoeflerText-Black", fontSize: 24}
		});
		view.add(venName);
		venWin.add(view);
	};
};

// var for search bar results
var query;
// search bar
var search = Ti.UI.createView({
	top: 0, 
	height: 40,
	viewShadowColor: "373737",
	viewShadowRadius: 6,
	viewShadowOffset:(-5,-10),
	backgroundColor: "white"
});
var searchText = Ti.UI.createSearchBar({
	height: 30,
	hintText: "Search",
	clearOnEdit: "true"
});
searchText.addEventListener("return", function(e){
				query = searchText.value;
				geo.geoSearch();
				win.close();
				venWin.open();
		
});
// login screen setup
var user = Ti.UI.createTextField({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		borderColor: "001998",
		color: '#336699',
	  	top: 200, 
	  	width: 200,
	  	height: 30,
	  	hintText: "username",
	  	clearOnEdit: "true"
});
var userLabel= Ti.UI.createLabel({
	text: "Username = justin",
	top: user.top + user.height ,
	font: {fontFamily: "Thonburi-Bold", fontSize: 14}
});
var pass = Ti.UI.createTextField({
		top: user.top + user.height + 25,
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		borderColor: "001998",
	  	color: '#336699',
	  	width: 200,
	  	passwordMask: "true",
	  	height: 30,
	  	hintText: "Password",
	  	clearOnEdit: "true"
});
var passLabel = Ti.UI.createLabel({
	text: "Password = hinds",
	top: pass.top + pass.height,
	font: {fontFamily: "Thonburi-Bold", fontSize: 14}
});
var login = Ti.UI.createView({
		height: 40,
		width: 80,
		backgroundColor: "#000",
		top: pass.top + pass.height + 60
});
var loginLabel = Ti.UI.createLabel({
		text: "Login",
		color: "#fff",
		font: {fontFamily:"menlo-bold", fontSize: 14}
});//event listener for login button
// eventListener for login button
login.addEventListener("click", function(e){
	if(user.value == "justin" && pass.value == "hinds"){
		var dialog = Ti.UI.createAlertDialog({
			message:"Are you sure you want to login?",
			buttonNames: ["Yes","No"],
			title:"Login",
			ok: 0
		});
		dialog.show();
	dialog.addEventListener("click",function(e){
		// login confirmation
		if (e.index === e.source.ok){		
			win.open();	
		}
});
	}else{
		//error alert
		alert("Invalid Username or Password");
	}
});
// adding items to the window
loginWin.add(user);
loginWin.add(pass);
loginWin.add(login);
loginWin.add(loginLabel);
loginWin.add(userLabel);
loginWin.add(passLabel);
loginWin.open();
win.add(search);
win.add(searchText);

exports.searchRes = searchRes;
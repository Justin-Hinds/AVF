Ti.UI.setBackgroundColor("fff");

var win = Ti.UI.createWindow({
	
});
var bUi = function(info){
	var view = Ti.UI.createView({
		backgroundColor: "white",
		layout: "vertical"
		
	});
	var redView = Ti.UI.createView({
		backgroundColor: "red",
		height: "20%",
		width: "30%"
	});
	var label = Ti.UI.createLabel({
		text:" info.sunrise.sunrise.hour + info.sunrise.sunrise.minute",
		top: 10
		
	});
	win.add(Ti.UI.createLabel({
		text: "info.sunrise.sunrise.hour + info.sunrise.sunrise.minute",
		top: 10
		
	}));
	//console.log(label);
//redView.add(label);
//view.add(label, redView)	;
win.add( label, redView);


};

 win.open();
 exports.bUi = bUi;
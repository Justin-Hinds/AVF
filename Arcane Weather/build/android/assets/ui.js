Ti.UI.setBackgroundColor("fff");var win=Ti.UI.createWindow({layout:"vertical"}),bUi=function(e){for(i=0;i<e.forecast.simpleforecast.forecastday.length;i++){var t=Ti.UI.createView({backgroundColor:"aed6f0",height:"20%",top:20,width:"80%",viewShadowColor:"373737",viewShadowRadius:6,viewShadowOffset:-10,layout:"vertical"}),o=Ti.UI.createLabel({text:e.location.city,top:10,left:15,font:{fontSize:34,fontFamily:"Futura-Medium"}}),a=Ti.UI.createLabel({text:e.forecast.simpleforecast.forecastday[i].date.weekday+" "+e.forecast.simpleforecast.forecastday[i].date.monthname+", "+e.forecast.simpleforecast.forecastday[i].date.day,top:5,left:15}),r=Ti.UI.createLabel({text:"Conditions "+e.forecast.simpleforecast.forecastday[i].conditions,top:5,left:15,font:{fontSize:26,fontStyle:"Optima-ExtraBlack"}}),n=Ti.UI.createLabel({text:"Low "+e.forecast.simpleforecast.forecastday[i].low.fahrenheit+" High "+e.forecast.simpleforecast.forecastday[i].high.fahrenheit,top:5,left:15,font:{fontSize:26,fontStyle:"Optima-ExtraBlack"}});win.add(t),t.add(o,a,n,r)}};win.open(),exports.bUi=bUi;
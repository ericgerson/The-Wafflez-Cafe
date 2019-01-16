/*
	The Wafflez Cafe Project
	author: Eric
	date: 1/9/18
	
	Filename:waff_menu.js
*/
"use strict";

//Based on what day of the week it is the HTML document will have a special flavor printed to the page
var day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

var date=new Date();
var weekday = day[date.getDay()]
if(weekday==day[0]){
	document.getElementById("dayFlavor").insertAdjacentHTML("beforeend","Cookie Dough Waffles");
}else if(weekday==day[1]){
	document.getElementById("dayFlavor").insertAdjacentHTML("beforeend","Strawberry Cheesecake Waffles");
}else if(weekday==day[2]){
	document.getElementById("dayFlavor").insertAdjacentHTML("beforeend","Mint Chocoalate Waffles");
}else if(weekday==day[3]){
	document.getElementById("dayFlavor").insertAdjacentHTML("beforeend","Salted Caramel Waffles");
}else if(weekday==day[4]){
	document.getElementById("dayFlavor").insertAdjacentHTML("beforeend","Pecan Pie Waffles");
}else if(weekday==day[5]){
	document.getElementById("dayFlavor").insertAdjacentHTML("beforeend","Sweet Potato Pie Waffles");
}else if(weekday==day[6]){
	document.getElementById("dayFlavor").insertAdjacentHTML("beforeend","Funfetti Waffles");
}







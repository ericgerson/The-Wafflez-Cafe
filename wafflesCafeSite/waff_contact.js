/*
	The Wafflez Cafe Project
	author: Eric
	date: 1/9/18
	
	Filename:waff_contact.js
*/

"use strict";


// Prompts the user with a message and then the feedback form fields reset after the click of the submit button

function feedbackButton(){
		window.alert("Thank you for your Feedback! We hope to see you again soon!");
		document.getElementsByTagName("form")[0].value="";
	
}
document.getElementById("submit").addEventListener("click", feedbackButton);

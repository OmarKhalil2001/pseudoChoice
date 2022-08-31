
/* in the webpage the main div has an ID of "main". this script checks if the screen available is less than or equal 600px. then, if the screen available is less than 600px, it resizes the main div's width and height*/

var main = document.getElementById("main");
var html = document.querySelector("html");

	// resizes the height according to screen
	html.style.height= main.height; 
	if (screen.availWidth <= 600){

		main.style.width = "80%" ;
		main.style.minHeight = "60%";
			
}

	// Essential Variables
	var choices;
	var privacyButton = document.getElementById("privacyButton");//calls the "Privacy Policy"
	var message = document.getElementById("message"); //calls the part in which success/ failuer message appears
	var submit = document.getElementById("submit");// calls submit button
	var ul =  document.getElementById("unordered-list");//calls the unorder list that hold the input boxes
	var add = document.getElementById("Add"); // calls the "Add" button
	var Remove = document.getElementById("Remove"); // calls the "Remove" button
	var divOfChoice = document.getElementById("choice"); // calls the div in which the "Pick" button, disclaimer, and choice appear in
	var pickedchoice = document.getElementById("picked");// Calls the <p> tag in which the picked choice appears in(after clicking "Pick" ) 
	var pick = document.getElementById("pick");//calls the "Pick" button
	var back = document.getElementById("back");//calls the "back" button
	var nextSection = document.getElementById("continue");//calls the continue button	
	var section1 = document.getElementById("section1");//calls the div in which the logo, the title, and the explanation appear in.
	var section2 = document.getElementById("section2");//calls the div in which the choices are collected appear in.
	var condition = 1; //Used with PrivacyHideShow function
	
	function Section1ToSection2(){
		section1.style.display = "none";
		section2.style.display = "block";
	}

	nextSection.addEventListener("click",Section1ToSection2)

	/*Function's usage is to show and hide the privacy section. When privacyButton is clicked, the function multiplies "condition" variable
	by -1. After that, it tests to see if the new value of "condition" equals to 1; if so, it keeps the div hidden; else, it displays the 	div */	
	function PrivacyHideShow(){
		condition = condition * -1;

		if(condition == 1){

			document.getElementById("privacy").style.display = "none";
			privacyButton.style.width ="60%"
			privacyButton.innerHTML = "<B>Show Privacy Policy</B>";	
				
		} else{

			document.getElementById("privacy").style.display = "block";
			privacyButton.style.width ="60%"
			privacyButton.innerHTML = "<B>Hide</B>";
			
					}}

	// calls function PrivacyHideShow when privacy button is clicked
	privacyButton.addEventListener("click", PrivacyHideShow )

	/* This function checks if any input is empty or has only spaces. First, it checks if the input is an empty string; if so, it returns 1. 
 	If the input is not an empty string, the funtion checks if the the input has characters other than spaces. To be able to check if the 		the input has characters other than spaces, the function uses a for loop and string.slice method to slice each letter and check if 
	character code of that letter is not equal to 32 (the character code of a space); if character code of the letter is not equal to 32,
	the loop stops and the function returns 0; if character code of the letter is equal to 32, the loop continues. If all of the characters 
	of the input are spaces, the function returns 1. */
	function CheckWord (word){  

		var  WordOfInput; 
		var valid ; 

		if (word === ""  ){
		       
			valid = 1;
			
		} else {

			for( var a = 0; a < word.length; a++){

			WordOfInput = word.slice(a, a+1);

			if (WordOfInput.charCodeAt(0) !== 32){

				valid = 0;
				break;
			
			} else if (WordOfInput.charCodeAt(0) === 32 || word == undefined  ){

		        
				valid = 1;}}}

		return valid;
	}

	// checks if the inputs are valid.
	function check(){
		
		//assigns all inputs from the DOM to an array named "choices"
		choices = document.querySelectorAll("input");

		//checks if there are more than 1 input box; if not, displays an error message
		if (choices.length < 2){
		
			message.style.color = "rgb(255,183, 80)";
			message.textContent = `Are you sure that there is more than 1 choice ?!!`;
			divOfChoice.style.display = "none";				
				
		} else{ 
			// if there are more than 1 input box, the function uses "checkWord" function and a for loop to check if any input is empty or has spaces only.

			for (var u = 0; u < choices.length; u++) {
			
			//if "checkWord" function returns 1, there is a problem with the value of the input and the fuction displays an error message		

			if (CheckWord(choices[u].value) == 1){

				message.style.color = "rgb(255,183, 80)";
				message.textContent = `Are you sure that there is no empty choices ?!!`;
				divOfChoice.style.display = "none";		
				break;
						
			} else {

			//if "checkWord" function returns 0, there is no problem with the value of the input and the loop continues
			//if all inputs are valid success message is displayed
				section2.style.display = "none";
				pickedchoice.textContent = "";
				divOfChoice.style.display = "block";}}}

					}
	
	//calls the function "check" if 'submit' button is clicked
	submit.addEventListener("click", check);

	//This function adds another input box, which allows users to add more choices.
	function AddChoice(){

		// First, it adds another "li" element to the unordered list that holds all input elements
		ul.appendChild(document.createElement("li"));

		//assigns all "li"s from the DOM to an array named "choices"
		choices = document.querySelectorAll("li");

		//Adds HTML to the last "li" (the one that was added) so that input box appears
		choices[choices.length-1].innerHTML =	`<input type="text" style= "text-indent: 7px; margin : 2.5px; border-color : black; 								width :70%; border-radius : 10px; background : rgba(255,255,255,0.8);"></input>`;

		// Makes sure that "divOfChoice" (the div in which the picked choice appears) and the success/error message are not displayed 
		divOfChoice.style.display = "none";
		message.textContent = "";
	}

		// removes an input box, which allows users to insert fewer choices 
	function remove(){
		
		//assigns all "li"s from the DOM to an array named choices
		choices = document.querySelectorAll("li");
		
		//removes the last "li", which contains the last input box 
		ul.removeChild(choices[choices.length-1]);
		
		// Makes sure that divOfChoice (the div in which the picked choice appears) and the success/error message are not displayed 	
		divOfChoice.style.display = "none";		
		message.textContent = "";
		

	}

	//The function that picks a choice in a pseudorandom way.
	function picker() {

		//assigns all inputs from the DOM to an array named choices
		choices = document.querySelectorAll("input");

		// creates a number in pseudorandom way, rounds it to the nearest to equal or lower value, and assigns it to variable "choice"
		// I used "choices.length - 1" because the index of the last value of an array is equal to array.length - 1. 
		var choice = Math.round((choices.length - 1) * Math.random());

		//displays the picked choice 
		//uses variable "choice" to pick an input from the array "choices"; then changes the text content of the "p" element that is 			assigned to variable "pickedchoice" so that it becomes the same as the value of the picked input  
		pickedchoice.textContent = choices[choice].value;

}

function backToSection2(){

				section2.style.display = "block";
				pickedchoice.textContent = "";
				divOfChoice.style.display = "none";


}
	back.addEventListener("click", backToSection2);
	pick.addEventListener("click", picker);
	add.addEventListener("click", AddChoice);
	Remove.addEventListener("click", remove);

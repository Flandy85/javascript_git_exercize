// Training javascript from Udemy and git terminal

// Object
obj = {
	name: "Anders",
	age: 33,
	status: "girlfriend"
}
console.log(obj);

// Array
array = ["Opel", "Volvo 850", "Volvo V40", "VW Golf 1.6"];
console.log(array);

// Variabels string, int and float
var myName = "Anders Gustavsson",
	myAge = 33,
	myPrecizeAge = 33.1;
console.log(myName, myAge, myPrecizeAge);

// Javascript toUpperCase() method
var str = "The blue blanket is sitting on the desk";
strUpperCase = str.toUpperCase();

// Concatinating  string varaibles
var intro = "Hello my name is ";
	name = "Anders";
	fullName = intro + name;
console.log(fullName);

// Converting avariables
var theNum = "33";
console.log(theNum);
theNum = Number(theNum);
console.log(theNum);

//Splitting array
arr = str.split(" ");
console.log(arr);

// Joining array
arrJoined = arr.join("-");
console.log(arrJoined);

var url = arrJoined.toLowerCase();
console.log(url);

// Playground
var playStr = "Practicing javascript variables and methods to get at better understanding";
console.log(playStr);

// function myFunction() {
//     var playStr = "Practicing javascript variables and methods to get at better understanding",
//     	result = playStr.
//     document.getElementById("title").innerHTML = result;
// }
// Project1, making a url variable practice 
var array1 = ["https://wastelandsolution.se"], // array1
	array2 = ["/wordpress/kontakta-oss/"], // array2
	arrUrl = array1.concat(array2); // Concat array1 and array2, making one array
	url = arrUrl.join(""); // joining arrays with no space between them.
	console.log(url);

//Project2
var website = "https://wastelandsolution.se/",
	new_string = "The quiCK brown FOX jumps of the  lazy dog",
	new_string = new_string.toLowerCase(), // Make string into lowe case
	new_url = new_string.replace("  ", " "), // replace double whitespace to one whitespace
	new_url = new_url.split(" "),
	new_url = new_url.join("-"),
	websiteUrl = website + new_url;

	console.log(new_string);
	console.log(new_url);
	console.log(websiteUrl);


// If else statments

/*var firstname = "Anders";
if(firstname == "Anders") {
	alert("Yes my name is Anders")
}
else {
	alert("My name is NOT Anders");
}

if(firstname == "Joseph") {
	alert("Hello Joe!");
}
else if (firstname == "Anders") {
	alert("Yes thats correct!")
}
else {
	alert("Who are you?")
}
*/

// Prompt for see user input
// var firstName = prompt('What is your name?');
// // Check if the name is null, clicking cancel button
// console.log(firstName);
// if(firstName === null) {
// 	alert("You don't have a name!");
// 	console.log(firstName);
// }
// //Check if user puts in a name when prompted
// else if (firstName == "Anders") {
// 	alert("Hello " + firstName);
// 	console.log(firstName);
// }
// If empty and press ok button
// else {
// 	alert("Hello guest");
// 	console.log(firstName);
// }
// select id main and change content with querySelector.
// var main = document.querySelector('#main');
// main.innerHTML = "Hello World";
// main.innerHTML += ' I am editing this page with javascript! ';
// content = main.innerHTML;
// main.innerHTML += 'Edited';
// main.innerHTML = 'Please REMOVE me!';
// content = content.toUpperCase().replace(' ', '-');
// main.innerHTML = content;
// // Select inputfield class textfield
// var txt = document.querySelector('.textfield');
// txt.innerHTML = 'TEST'; // Value test
// txt.value = 'A new attribute value'; // Change value to new text

// input = txt.value; // input = txt variable value
// alert(input);	// alert input variable
// console.log(input);
// data = txt.value;
// console.log(data);

// Select id main
var main = document.querySelector('#main');
main.innerHTML = 'Hello World'; // Change content to hello world
main.style.border = '1px solid red'; // change css 1px solid red border
main.style.color = '#fff'; // Change text color to white
main.style.textAlign = 'center';
main.style.fontSize = '50px';
main.style.fontWeight = '800';

// Select body html tag
var body = document.querySelector('body'); 
body.style.backgroundColor = 'black' // Change background color on body to white
/*********************************************************
			Functions
*********************************************************/
Sample function
function Addition(num1, num2) {
	// var Name = prompt("What is ypur name?");
	// alert("Hello " + Name);
		total = num1 + num2;
		return total;
}
var newTotal = Addition(10, 15);
alert(newTotal);

// Multiplikation function example
// function Multiplikation(number1, number2) {
// 	Total = number1 * number2
// 	return Total;
// }
// Multiplikation(50, 23);
// console.log(Multiplikation(50, 23));

// // Add names function 
// function YourNames(firstName, lastName) {
// 	fullName = firstName + lastName;
// 	return fullName;
// }
// console.log(YourNames("Anders ", "Gustavsson"));

// function getName(class_selector) { // Function with class selector
// 	var nameElement = document.querySelector(class_selector); // class selector 
// 	var name = nameElement.value;

// 	var newName = name.replace('Smith', 'Gustavsson'); // Replace Smith with Gustavsson
// 	return newName;
// }
// // Function getFirstName
// function getFirstName() {
// 	var name = getName('.name') //Variabel name that holds getName function and select class name .name 
// 	var firstName = name.split(" "); // Split array into 2 pieces

// 	return firstName[0]; // Return first piece of array
// 	console.log(firstName);
// }
// var firstname = getFirstName();
// console.log(firstname);

// var currentName = getName();
// console.log(currentName);

/*********************************************************
			Functions and Events
*********************************************************/
// Function Change HTML

function changeMainHtml() {
	var main = document.querySelector('#main');
	var sentence1 = "Hello thank you for changing me",
		sentence2 = "Oh hello, Im a diffrent sentence";

	if(main.innerHTML == sentence1){
		main.innerHTML = sentence2
		main.style.color = 'yellow';
	}
	else {
		main.innerHTML = sentence1;
		main.style.color = '#fff';
	}
}
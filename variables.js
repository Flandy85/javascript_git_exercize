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

function myFunction() {
    var playStr = "Practicing javascript variables and methods to get at better understanding",
    	result = playStr.
    document.getElementById("title").innerHTML = result;
}
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




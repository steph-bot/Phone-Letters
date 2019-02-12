// issues to work out:
//
// - allows for submission with missing digits. leads to inaccurate results!
//	 esp after a full number has been submitted, followed by an incomplete
// 
// - should i use:
// - - " " 	blank spaces " " for zero
// - - ""	leave out, using ""
// - - "0"	ones and zeroes



/*---------------------------------------------------------------------------*\
  # CACHE SELECTORS
\*---------------------------------------------------------------------------*/

var	digit1a = document.getElementsByName("digit1")[0]; // user entry digit #1
var	digit2a = document.getElementsByName("digit2")[0]; //				   #2
var	digit3a = document.getElementsByName("digit3")[0]; //				   #3
var	digit4a = document.getElementsByName("digit4")[0]; //				   #4
var	digit5a = document.getElementsByName("digit5")[0]; //				   #5
var	digit6a = document.getElementsByName("digit6")[0]; //				   #6
var	digit7a = document.getElementsByName("digit7")[0]; //				   #7


var userEntry; // user entered phone number as a string ex: "3308004"

var button = document.getElementById("btn"); // submit button

// define letters for each digit
var _0 = ['0'];
var _1 = [' '];
var _2 = ['a', 'b', 'c'];
var _3 = ['d', 'e', 'f'];
var _4 = ['g', 'h', 'i'];
var _5 = ['j', 'k', 'l'];
var _6 = ['m', 'n', 'o'];
var _7 = ['p', 'q', 'r', 's'];
var _8 = ['t', 'u', 'v'];
var _9 = ['w','x','y','z'];

var newUserArray2 = []; // phone number array 
                        //ex: ["_3", "_3", "_0", "_8", "_0", "_0", "_4"]

var newUserArray = []; // phone number [array of [array of letters]]
var letterMatrix = []; // phone number array of letters

var list = []; // array of all letter combos 


// FUNCTION DECLARATION
// form validation for numbers
// allows numbers only to be entered into form
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}












// FUNCTION DECLARATION
// name is what we are looking at (ex: userEntry = '234')
// function will create newUserArray2 with format: ['_2', '_3', '_4']
function createArray2(name){
	counter2 = 0;
	while (counter2 < name.length){
		newUserArray2[counter2] = "_" + name[counter2];
		// console.log(newUserArray2[counter2]);
		counter2++;
	}
}


// FUNCTION DECLARATION
// creates new array with letters for each number (newUserArray)
function numToLetters(name){
	i = 0
	while (i < name.length){
		if (name[i] === "_0"){
			newUserArray[i] = [_0];
			// console.log(newUserArray);
			i++;
		} else if (name[i] === "_1"){
			newUserArray[i] = [_1];
			// console.log(newUserArray);
			i++;
		} else if (name[i] === "_2"){
			newUserArray[i] = [_2];
			// console.log(newUserArray);
			i++;
		} else if (name[i] === "_3"){
			newUserArray[i] = [_3];
			// console.log(newUserArray);
			i++;
		} else if (name[i] === "_4"){
			newUserArray[i] = [_4];
			// console.log(newUserArray);
			i++;
		} else if (name[i] === "_5"){
			newUserArray[i] = [_5];
			// console.log(newUserArray);
			i++;
		} else if (name[i] === "_6"){
			newUserArray[i] = [_6];
			// console.log(newUserArray);
			i++;
		} else if (name[i] === "_7"){
			newUserArray[i] = [_7];
			// console.log(newUserArray);
			i++;
		} else if (name[i] === "_8"){
			newUserArray[i] = [_8];
			// console.log(newUserArray);
			i++;
		} else if (name[i] === "_9"){
			newUserArray[i] = [_9];
			// console.log(newUserArray);
			i++;
		} else {
			newUserArray[i] = [_0];
			// console.log(newUserArray);
			i++;
		}
	}
}


// FUNCTION DECLARATION
function simplifyArray (name){
	var simpleArray = [];
	i = 0;
	while (i < name.length){
		simpleArray[i] = name[i][0];
		// console.log(simpleArray);
		i++;
	}
	return simpleArray;
}


// FUNCTION DECLARATION
// function will create list=[] of all letters combos for phone number
// - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - - - - - 
// name1 is which digit we are looking at (ex: 2)
// input is each item of letterMatrix array (created from phone number)
// output is list of all letters combos for phone number
function letterList(name1, name2, name3, name4, name5, name6, name7){
	list=[];
	counter1 = 0;
	counter2 = 0;
	counter3 = 0;
	counter4 = 0;
	counter5 = 0;
	counter6 = 0;
	counter7 = 0;
	while (counter7 < name7.length){
		while (counter6 < name6.length){
			while (counter5 < name5.length){
				while (counter4 < name4.length){
					while (counter3 < name3.length){
						while (counter2 < name2.length){
							while (counter1 < name1.length){
								// console.log(name1[counter1]+name2[counter2]+name3[counter3]+name4[counter4]+name5[counter5]+name6[counter6]+name7[counter7]);
								list.push(name1[counter1]+name2[counter2]+name3[counter3]+name4[counter4]+name5[counter5]+name6[counter6]+name7[counter7]);
								counter1++;
							}
							counter2++;
							counter1=0;
						}
						counter3++;
						counter2=0;
						counter1=0;
					}
					counter4++;
					counter3=0;
					counter2=0;
					counter1=0;
				}
				counter5++;
				counter4=0;
				counter3=0;
				counter2=0;
				counter1=0;
			}
			counter6++;
			counter5=0;
			counter4=0;
			counter3=0;
			counter2=0;
			counter1=0;
		}
		counter7++;
		counter6=0;
		counter5=0;
		counter4=0;
		counter3=0;
		counter2=0;
		counter1=0;
	}
}




// wip wip wip
var ul = document.querySelectorAll("ul")[1]; // shopping list
// creates new list item and appends to bottom of list
function createListElement(){
	// create list element
	var li = document.createElement("li");
	// add text to list element (user input)
	li.appendChild(document.createTextNode("entry"+userEntry));
	// append li to unordered list
	ul.appendChild(li);

	// var li = document.createElement("li");
	// li.appendChild(document.createTextNode(list));
	// ul.appendChild(li);

	i = 0;
	while (i < list.length){
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(list[i]));
		ul.appendChild(li);
		i++;
	}




	// // create button element
	// var newButton = document.createElement("BUTTON");
	// // create text node (create button text)
	// var t = document.createTextNode("delete");
	// // Append the text to <button> (allows button to have text)
	// newButton.appendChild(t); 
	// // assign class to new btn
	// newButton.classList.add("deleter");

	// // append button to list element
	// li.appendChild(newButton);

	// append li to unordered list
	// ul.appendChild(li);

	// reset form to blank value
	// input.value="";
	digit1a.value = "";
}

// reset form to blank value
function clearForm(){
	digit1a.value = "";
	digit2a.value = "";
	digit3a.value = "";
	digit4a.value = "";
	digit5a.value = "";
	digit6a.value = "";
	digit7a.value = "";
}

// NOT WORKING????
// moves cursor to input box
function cursor(){
	// // digit1a.focus();
	// digit1a.select();
	// digit1a.focus({preventScroll:true});


	//THISSSSS WORKS IF VAL ALREADY THERE IN BOX
// document.getElementById('digit1').select()
	document.getElementsByName("digit1")[0].select()
	document.getElementsByName("digit1")[0].focus({preventScroll:true});
	
}




// FUNCTION DECLARATION
// when form submits, create list of letter combos from user entry 
function formSubmit() {

	userEntry = digit1a.value + digit2a.value + digit3a.value
			  + digit4a.value + digit5a.value + digit6a.value
			  + digit7a.value;



	// FUNCTION CALLS:
	createArray2(userEntry); // new array is newUserArray2
	numToLetters(newUserArray2); // new array is newUserArray

	letterMatrix = simplifyArray(newUserArray);

	letterList(letterMatrix[0],letterMatrix[1],letterMatrix[2],
		letterMatrix[3],letterMatrix[4],letterMatrix[5],letterMatrix[6]);

	console.log(list);

	createListElement();

	cursor();



}



// FUNCTION CALL
// click submit button
button.addEventListener("click", formSubmit);



// newUserArray.length;







// FUNCTION DECLARATION
// counts number of vowels in a string and returns it
function getVowels(str) {
  var m = str.match(/[aeiou]/gi);
  return m === null ? 0 : m.length;
}



// FUNCTION DECLARATION
// ugh
function isBigEnough(value) {
  return (getVowels(value) > 0);
}

// FUNCTION CALL
var filtered = list.filter(isBigEnough);

console.log(filtered);










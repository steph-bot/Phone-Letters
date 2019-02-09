
/*---------------------------------------------------------------------------*\
  # CACHE SELECTORS
\*---------------------------------------------------------------------------*/
var digit1; 
var digit2;
var digit3;
var digit4;
var digit5;
var digit6;
var digit7;
var userEntry;
var button = document.getElementById("btn"); // submit button

// DEFINE VARS
var _0 = [''];
var _1 = [''];
var _2 = ['a', 'b', 'c'];
var _3 = ['d', 'e', 'f'];
var _4 = ['g', 'h', 'i'];
var _5 = ['j', 'k', 'l'];
var _6 = ['m', 'n', 'o'];
var _7 = ['p', 'q', 'r', 's'];
var _8 = ['t', 'u', 'v'];
var _9 = ['w','x','y','z'];

var list = [];
var newUserArray2 = [];
var newUserArray = [];

var letterMatrix = [];


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


// // FUNCTION CALL
// // click submit button
// button.addEventListener("click", formSubmit);





// FUNCTION DECLARATION
// function will list all letters associated with each digit
// name is which digit we are looking at (ex: 2)
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
// when form submits, cache value of each phone digit
function formSubmit() {
	digit1 = document.getElementsByName("digit1")[0].value;
	digit2 = document.getElementsByName("digit2")[0].value;
	digit3 = document.getElementsByName("digit3")[0].value;
	digit4 = document.getElementsByName("digit4")[0].value;
	digit5 = document.getElementsByName("digit5")[0].value;
	digit6 = document.getElementsByName("digit6")[0].value;
	digit7 = document.getElementsByName("digit7")[0].value;
	userEntry = digit1+digit2+digit3+digit4+digit5+digit6+digit7;
	// FUNCTION CALLS:
	createArray2(userEntry); // new array is newUserArray2
	numToLetters(newUserArray2); // new array is newUserArray


	// FUNCTION CALL
	letterMatrix = simplifyArray(newUserArray);
	letterList(letterMatrix[0],letterMatrix[1],letterMatrix[2],letterMatrix[3],letterMatrix[4],letterMatrix[5],letterMatrix[6]);

	console.log(list);



}



// FUNCTION CALL
// click submit button
button.addEventListener("click", formSubmit);


// newUserArray.length;



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










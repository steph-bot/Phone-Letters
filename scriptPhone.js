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

var userEntry = prompt("What is your phone number?");

// _2.length = 3

// name is which digit we are looking at (ex: 2)
// function will list all letters associated with that digit
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

// name is what we are looking at (ex: userEntry = '234')
// function will create newUserArray with format??
var newUserArray = [];
// function createArray(name){
// 	counter2 = 0
// 	while (counter2 < name.length){
// 		// newUserArray[counter2] = "_" + name[counter2];
// 		if (name[counter2] === "2"){
// 			// newUserArray[i] = ['a','b','c']
// 			newUserArray[counter2] = [_2];
// 		} else if (newUserArray[counter2] === "_3"){
// 			newUserArray[counter2] = [_3];
// 		}
// 		console.log(newUserArray[counter2]);
// 		counter2++;
// 	}
// }


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

// }ß
// if (newUserArray[i] === "_2"){
//     newUserArray[i] = ['a','b','c']}

// // name is which digit we are looking at (ex: 2)
// // function will list all letters associated with that digit
// function convertList(name){
// 	counter2 = 0
// 	while (counter2 < name.length){
// 		name[counter2] = "_" + name[counter2];
// 		console.log(name[counter2]);
// 		counter2++;
// 	}
// }

// name is what we are looking at (ex: userEntry = '234')
// function will create newUserArray2 with format: ['_2', '_3', '_4']
var newUserArray2 = [];
function createArray2(name){
	counter2 = 0;
	while (counter2 < name.length){
		newUserArray2[counter2] = "_" + name[counter2];
		// console.log(newUserArray2[counter2]);
		counter2++;
	}
}

createArray2(userEntry); // new array is newUserArray2
numToLetters(newUserArray2); // new array is newUserArray

newUserArray.length;

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

var letterMatrix = simplifyArray(newUserArray);
letterList(letterMatrix[0],letterMatrix[1],letterMatrix[2],letterMatrix[3],letterMatrix[4],letterMatrix[5],letterMatrix[6]);

console.log(list);


// counts number of vowels in a string and returns it
function getVowels(str) {
  var m = str.match(/[aeiou]/gi);
  return m === null ? 0 : m.length;
}


// // create array with vowel count of each letter combo
// i = 0; 
// var vowelCount=[];
// 	while (i < list.length){
//         vowelCount[i] = getVowels(list[i]);
//         i++;
//     }



// var keys = list;
// var values = vowelCount;

// var keys = vowelCount;
// var values = list;

// var result = {};
// keys.forEach((key, i) => result[key] = values[i]);
// console.log(result);



// // trying to create an array with strings that have at least one vowel
// // problem is the array length is still same (leaves blank spaces when
// // there are no vowels)
// var hasVowels = [];
// i=0;
// while (i < list.length){
// if (getVowels(list[i]) > 0) { // if string has one or more vowels..
//     hasVowels[i]=list[i];	  // add it to the array
// }
// i++;
// }

// ugh
function isBigEnough(value) {
  // return value >= 10;
  return (getVowels(value) > 0);
}

var filtered = list.filter(isBigEnough);

console.log(filtered);


// form validation for numbers
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}


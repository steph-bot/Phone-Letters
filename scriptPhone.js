var _2 = ['a','b','c'];
var _3 = ['d','e','f'];

function lister (){

}

var userEntry = prompt("What is your phone number?");

// _2.length = 3

// name is which digit we are looking at (ex: 2)
// function will list all letters associated with that digit
function letterList(name1, name2){
	counter1 = 0;
	counter2 = 0;
	while (counter2 < name2.length){
		while (counter1 < name1.length){
			console.log(name1[counter1]+name2[counter2]);
			counter1++;
		}
		counter2++;
		counter1 = 0;
	}
}

// name is what we are looking at (ex: userEntry = '234')
// function will create newUserArray with format: ['_2', '_3', '_4']
var newUserArray = [];
function createArray(name){
	counter2 = 0
	while (counter2 < name.length){
		newUserArray[counter2] = "_" + name[counter2];
		console.log(newUserArray[counter2]);
		counter2++;
	}
}

createArray(userEntry); // new array is newUserArray

function numToLetters(name){
	i = 0
	while (i < name.length){
		if (newUserArray[i] === "_2"){
			// newUserArray[i] = ['a','b','c']
			newUserArray[i] = [_2]
		}
		console.log(name[i]);
		i++;
	}
}

// }
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




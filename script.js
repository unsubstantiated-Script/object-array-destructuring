//-->Array Destructuring
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8"];

//Array destructuring helps you get only specific elements out of the array and load them into specific variables in order...
//Can declare multiple vars all at once...
const [first, second] = alphabet; //Vars on the left array to destructure on the right

//can skip elements by leaving blanks, can grab the rest by using ...varName will dump into a new array though...
const [one, , three, ...theRest] = numbers;

console.log(first, second);
console.log(one, three, theRest.toString());

//Can use the spread operator to combine arrays
const mixedArray = [...alphabet, ...numbers];
console.log(mixedArray.toString());

function sumAndMultiply(a, b) {
	return [a + b, a * b, a / b];
}

const [
	sum,
	multiply,
	division = "no division" /*how to set a default*/,
] = sumAndMultiply(2, 3);

console.log(sum, multiply, division);

//--> Object Destructuring

const personOne = {
	name: "Kyle",
	age: 24,
	address: {
		city: "a grand land",
		state: "The 49th",
	},
};

const personTwo = {
	age: 32,
	favoriteMovie: "Mighty Ducks",
};

// const { name, age } = personTwo; //NOTE: can just grab the key!
// const {
// 	name: firstName,
// 	age: isGeezer,
// 	favoriteMovie = "Testing ",
// } = personTwo; //NOTE: can change the variable name too!

// const { name: firstName, ...allRest } = personTwo;

// const {
// 	name: firstName,
// 	address: { state },
// } = personTwo; //can destructure nested objects too

const person3 = { ...personOne, ...personTwo }; //this will merge up two objects changing the former with the latter

console.log(person3);

//We can destructure inside a function's arguments

function printUserInfo({ name, age, favoriteFood = "watermeloon" }) {
	console.log(
		`Name is: ${name} address is ${age} favorite food is ${favoriteFood}`,
	);
}

printUserInfo(personOne); //Object still needs to get passed into the callback

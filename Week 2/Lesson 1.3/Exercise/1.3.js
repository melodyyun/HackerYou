function nameOfFunction(parameter1, parameter2) { //called parameter when you're creating the function
	// block of statements to execute             //called argument when you're calling the function
}

const num1 = 5;
const num2 = 5;
const num3 = 5;

//function delaration:
function add(num1, num2, num3){
	//instructions
	const sum = num1 + num2 + num3;
	console.log(`add all the things and we have ${num1}, ${num2}, ${num3},`);
	console.log(`sum = ${sum}`);
	return sum;
}

add(2, 4, 6);

//function expression:
const hello = function(){
	console.log("Hello");
}

hello();

//ES6 arrow function
//default parameters 
const helloFriend = (firstName = "Jane", lastName = "Doe", age = 1, favFood = "ice cream") => {
	//instructions
	console.log(`Hello ${firstName} ${lastName} I hear you have loved ${favFood} for ${age} years!`);
}
//best practice, if you set defaults for parameters then put that at the end of the list so you don't need to write undefined in the middle of the list

helloFriend("Melody", "Chen", undefined, "Chinese food"); // age will = 1

const addMore = (number) => console.log(number);


addMore(5);
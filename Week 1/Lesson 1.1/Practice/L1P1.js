// 1. How many hours are in a year?

function hoursInAYear(){
	//takes years variable
	const years = prompt("Enter number of years");

	//calculates how many hours are in a year and saves this to the hours variable
	const hours = years * 2080; // there are 2080 hours in one year

	//prints answer to console
	console.log(`There are ${hours} hours in ${years} years`);
}

// 2. How many minutes are in a decade?

function minutesInADecade(){
	//takes decades variable
	const decades = prompt("Enter number of decades");

	//calculates how many minutes are in a decades and saves this to the minutes variable
	const minutes = decades * 60 * 24 * 365.25 * 10; // 60 (minutes in 1 hour) x 24 (hours in a day) x 365.25 (days in a year, allowing for leap year) x10

	//prints answer to console
	console.log(`There are ${minutes} minutes in ${decades} decades`);
}

// 3. How many seconds old are you?

function ageInSeconds(){
	//takes age variable
	const age = prompt("How old are you?");

	//calculates age in seconds
	const secondsAge = age * 60 * 60 * 24 * 30 * 12 // 60 seconds, 60 minutes, 24 hours, 30 days, 12 months 

	//prints answer to console
	console.log(`You are ${secondsAge} old in seconds`);
}

//4. What is the current year?

function currentYear(){
	const year = (new Date()).getFullYear();
	console.log(`The current year is: ${year}`);
}

//5. What year were you born?

function birthYear(){
	//takes age variable
	const year = (new Date()).getFullYear();
	const age = prompt("How old are you?");

	//calculates birth year with age
	const birthYear = year - age;

	//prints answer to console
	console.log(`You were born in ${birthYear}`);
}

//6. How many months old are you?

function monthsOld(){
	//takes age variable
	const age = prompt("How old are you?");

	//calculates birth year with age
	const months = age * 12;

	//prints answer to console
	console.log(`You are ${months} months old`);
}
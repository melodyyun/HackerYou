	//establish variables
	const seconds = 60;
	const minutes = 60;
	const hours = 24;
	const days = 365;
	const months = 12;

// 1. How many hours are in a year?

function secondsInAYear(){
	//calculates how many hours are in a year and saves this to the hours variable
	const secondsInAYear = seconds * minutes * hours * days; // there are 2080 hours in one year

	//prints answer to console
	console.log(`There are ${secondsInAYear} seconds in a years`);
}


// 2. How many seconds old are you?

function ageInSeconds(){
	//takes age variable
	const age = prompt("How old are you?");

	//calculates age in seconds
	const secondsAge = age * seconds * minutes * hours * days * months // 60 seconds, 60 minutes, 24 hours, 30 days, 12 months 

	//prints answer to console
	console.log(`You are ${secondsAge} old in seconds`);
}

// 3. How old are you if you are 1 million seconds old?

function oneMillionSeconds(){
	//establish variables
	const seconds = 1000000;

	//calculate age of 1 million seconds
	const age = seconds/ minutes / hours / days ;

	//prints answer to console
	console.log(`You're ${age} days old`);
}





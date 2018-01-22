console.log("Level 1. Log into the console the numbers between 5 and 12.")

for(let i = 5; i<=12; i++){
	console.log(i);
}

console.log("Level 2. Log into the console the numbers between 1 and 10 in reverse (i.e. starting with 10). ")

for(let i = 10; i>=1; i--){
	console.log(i);
}

console.log("Level 3. Print the even numbers between 1 and 20.")

for(let i = 1; i<=20; i++){
	if(i%2===0){
		console.log(i);
	}
}

console.log("Level 4. Print the numbers from 1 to 100. But for multiples of 3 print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiple of both 3 and 5, print “FizzBuzz”. ")

for(let i = 1; i<=100; i++){
	if(i%3 === 0 && i%5 === 0){
		console.log("FizzBuzz");
	}else if (i%3 === 0 ){
		console.log("Fizz");
	}else if (i%5 ===0){
		console.log("Buzz");
	}else{
		console.log(i);
	}
}


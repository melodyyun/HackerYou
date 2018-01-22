function quiz(){
	const answer = prompt("Is a poodle a dog? Yes or No").toLowerCase();
	if (answer === "yes"|| answer ==="Yes"){
		console.log("Great job you got it!");
	}else{
		console.log("Oh no you got it wrong");
	}
}

function rockPaperScissors(){
	const user = prompt("Rock paper or scissors?").toLowerCase();
	if (user === "rock"){
		alert("It's a tie")
	}else if (user === "paper"){
		alert("You win!");
	}else if (user === "scissors"){
		alert("You lose!");
	}else{
		alert("Please enter rock paper or scissors")
	}
}
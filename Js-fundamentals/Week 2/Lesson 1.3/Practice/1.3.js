// ____________________________
// Review
// ____________________________

	//if / if else / else
	if(password === correct){
		//show stuff
	}else if (password === oldPassword){
		//alert they changed their password
	}else{
		//reset password link
	}

	//loop
	for(let i = 0; i<=10; i++){
		console.log(i);
	}

	while(condition ===true){
		if(condition > 10){
			return;
			break;
		}
	}
	//built in functions
	prompt();
	alert();
	confirm();
	Math.max();
	Math.min();
	Math.round();


// function sayMyName(name){
// 	alert(`My name is ${name}`);
// }

const sayMyName = name => alert(`My name is ${name}`);

const aboutMe = (name, age, home = 'Mississauga') => {
	console.log(`${name} is ${age} old and lives in ${home}`);
}

const logPet = (petType = 'dog', petName) => {
    console.log(`${petName} is a ${petType}`);
}

const add = (num1, num2, num3) => {
	console.log(num1 + num2 + num3);
	return (num1 + num2 + num3);
}
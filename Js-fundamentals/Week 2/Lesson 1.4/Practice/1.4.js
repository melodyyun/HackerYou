const hackerYou ={
	schoolName: "HackerYou",
	course : "JavaScript Part-time",
	teacher: "Tiff",
	students: 30
}

const student ={
	id: 001,
	name: "Melody",
	age: 26,
	GPA: 4.0,
	highschool: "Central Peel"
}

console.log(`The student's name is ${student.name} 
with ID number ${student.id}, the student is ${student.age} 
years old, and went to ${student.highschool}`);

const inventory = {
	apples: 2,
	oranges: 3,
	bananas: 6,
	milk: 2
}

console.log(`We have ${inventory.apples} apples, we have ${inventory.oranges}, we have ${inventory.bananas}, we have ${inventory.milk}`);

for (items in inventory){
	console.log(items + " " + inventory[items]);
}
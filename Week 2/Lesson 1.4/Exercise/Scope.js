let dog = "Aspen";

const sayHi = () => {
	dog = "Rocky"
	console.log(dog);
}

console.log(dog);

sayHi();

console.log(dog);

for (let i = 0; i < 10; i++) {
// let is block scoped so when logged outside i will show undefined
}
console.log(i);

for (var i = 0; i < 10; i ++){

}
console.log(i);


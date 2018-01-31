const pizzaToppings = [
    'cheese',
    'pepperoni',
    'sauce',
]

console.log(pizzaToppings);

//push add something to the end
pizzaToppings.push('olives');
console.log(pizzaToppings);

//unshift add something to the beginning
pizzaToppings.unshift('dough');
console.log(pizzaToppings);

//pop removes something from the end
pizzaToppings.pop();
console.log(pizzaToppings);

//shift removes something from the beginning
pizzaToppings.shift();
console.log(pizzaToppings);

const names = [];

names.push('Sam');
names.push('Alex');
names.push('Jess');

console.log(names);

names.unshift('Chris');

console.log(names);

const spiceGirls = ["Ginger Spice", "Scary Spice", "Baby Spice", "Sporty Spice", "Posh Spice"];

spiceGirls.shift();
console.log(spiceGirls);
spiceGirls.pop();
console.log(spiceGirls);

const newArray = spiceGirls.concat(["Fennel Spice", 'Old Spice'], ['Basil Spice']);
console.log(newArray);

const sportyIndex = newArray.indexOf('Sporty Spice');
console.log(sportyIndex); // returns 2

console.log(newArray[sportyIndex]); // newArray[2];
//cannot use dot notation to access arrays
const musicObject = ["do", "re", "mi", "fa", "sol", "la", "ti", "do"];

const theArray = ["hello world!", 34, { name: "First", age: 66 }]

//Retrieve the 2nd value in the array.
console.log(theArray[1]);

//Update the first value to "hi earth!"
console.log(theArray[0] = "hi earth!");

//Retrieve the age property of the object in the array.
console.log(theArray[2].age);

//Update the name property of the object in the array to "Sam".
console.log(theArray[2].name = "Sam");

//declaration
function sayMyName(name){
    alert(name);
}

//expression
const sayMyName2 = function (name) {
    alert(name);
}

//arrow
const sayMyName3 = (name) => {
    alert(name);
}

sayMyName("Melody");


//Method is a function inside an object
const student = {
    name: 'Sam',
    age: 26,
    height: 120,
    getHeightInInches: function () {
        return student.height / 0.393701; // converts CM to Inches
    }
}

student.getHeightInInches();

console.log(student.getHeightInInches() );

//object
const student = {
    id: 63473892,
    name: "Jim",
    grades: {
        javascript: "88%"
    }
}
// id => key

student.name; //Jim
student["name"];
// if you don't put "" around name then it will look for a name variable 
// will returned cannot find name

for(let info in student){
    console.log(student[info]);
}
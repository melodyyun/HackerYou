// values are not always in order
const clothing = {
    belt: "can't remember",
    socks: 34,
    shoes: 2,
    pants: 3,
    hat: true,
    tShirts: {
        smallSize: 3,
        mediumSize: 4,
        largeSize: 2
    }
}
// dot notation
// console.log(clothing.pants);
// console.log(clothing.tShirts.mediumSize);

// // bracket notation
// console.log(clothing['hat']);
// console.log(clothing['tShirts']['smallSize']);
// //can go back and forth
// console.log(clothing['tShirts'].largeSize);

// clothing.shoes = 4;
// console.log(clothing.shoes);

// clothing.jewelery = true;
// console.log(clothing.jewelery);

const hackerYou = {
    schoolName: "Hacker You",
    numberOfCourses: 5,
    ageOfSchool: 6,
    instructor: "Tiff"
}

const student = {
    id: 0001,
    name: 'Melody',
    age: 26,
    GPA: 3.5,
    highSchool: 'Central Peel'
}

console.log(`Student (ID: ${student.id}) is named ${student.name} and this student is ${student.age} years old. They graduated from ${student.highSchool} Secondary School with a GPA of ${student.GPA}`);

console.log(student);
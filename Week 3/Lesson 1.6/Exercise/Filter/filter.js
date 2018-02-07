const names = ['Sam', 'Jamie', 'Alex', 'Andy', 'August', 'Chris', 'Dakota', 'Drew', 'Max'];

//filter returns new array
const short = names.filter((name)=>{
    if(name.length<=3){
        return true;
    }
});

console.log(short);

const students = [
    {
        name: 'Pat',
        grade: 58
    },
    {
        name: 'Taylor',
        grade: 93
    },
    {
        name: 'Dale',
        grade: 80
    },
    {
        name: 'Casey',
        grade: 78
    },
    {
        name: 'Jo',
        grade: 68
    }
];

const honours = students.filter((student)=>{
    if (student.grade >= 80){
        return true;
    }
});

console.log(honours);
const ages = [ 12,52,64,23,62,15];
const oldest = ages.reduce((accumulator, next)=>{
    if(accumulator >= next){
        return accumulator;
    }
    return next;
});

console.log(oldest);

//for finding the OLDEST biggest number will be placed in the accumulator

//accumulator would be the running the total or the winner
//next would be the next value for the test 


const totalAge = ages.reduce((total, next)=>{
    return total + next;
});

console.log(totalAge);
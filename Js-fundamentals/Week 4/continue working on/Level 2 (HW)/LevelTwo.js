//------------------
//Strings in common
//------------------
//Write a function that takes in two arrays of any length, and reports on any values it found in common. If no common entries are found, it should return an appropriate value.

const stringsInCommon = (array1, array2) => {
    const a1IsArray = Array.isArray(array1);
    const a2IsArray = Array.isArray(array2);
    if( !a1IsArray && !a2IsArray){
        return false;
    }else{
        array1.forEach(function (item1) {
            array2.forEach(function (item2) {
                if(item1 === item2){
                    console.log(item1);
                }
            });
        });
    }
}

// stringsInCommon(['do', 're', 'mi'], ['fa', 'so', 'la', 'ti', 'do'])
// // ['do']

// const animals = ['cow', 'deer', 'goat', 'chicken', 'pig', 'fish']
// const meats = ['chicken', 'beef', 'fish', 'pork'];
// stringsInCommon(animals, meats)
// // ['chicken','fish']

// stringsInCommon(['tinker', 'tailor', 'soldier', 'spy'], ['john', 'ringo', 'george', 'paul'])
// // []

//-------------
//Get Factors
//-------------

//Write a function that computes the factors of a positive integer.
// Output can be a string, an array, or an object, but NOT multiple output lines.
const getFactors=(num)=>{
    for(i=0; i<num; i++){
        if((i%num) === 0){
            console.log(i);
        }
    }
}

//First non-repeated character
//Write a JavaScript function to find the first not repeated character.

const getFirstUniqueChar = (str)=>{
    //make sure string is lowercase
    const lowerStr = str.toLowerCase();
    const letters = {}; // empty object

    //go through each letter, and count how many times it exists
    //if the letter does not exist in letters object then create it
    //if it does exist add one to the count
    for(let i = 0; i<lowerStr.length; i++){
        if(letters[lowerStr.charAt(i)]){
            letters[lowerStr.charAt(i)]++;
            // console.log('did exist');
        }else{
            letters[lowerStr.charAt(i)] = 1;
            // console.log('did not exist');
        }
        // console.log(letters);
    }

    //go through object with for in loop
    for(let key in letters){
        console.log(key);
        console.log(letters[key]);
        if(letters[key] === 1){
            return key;
        }
           return 'no unique letters'
    }
    //after we've gone through the whole string then look for the first letter that has 1 count

};

//FIX THIS RETURNS A!
getFirstUniqueChar('abacDdbec')
// 'e'

//Factorial
//Write a function that takes in a number(n) parameter, and returns or logs the factorial of that number — or in other words, the product of all numbers from 1 to the number.
//For instance, if the user inputs the number five, the output would be the result of performing the operation 5 x 4 x 3 x 2 x 1, which is 120.
//recursion = use a function within that function
const factorial = (num) => {
    if (num > 0) {
        return num * factorial(num - 1);
    } else {
        return 1;
    }
}
factorial(6)
// 720
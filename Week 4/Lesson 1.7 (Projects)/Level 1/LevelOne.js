// Which is bigger?
// Write a function that takes in two numbers as parameters, and then returns or logs the larger number.

const biggerNumber = (num1, num2) =>{
    if(num1>num2){
        console.log(`The bigger number is: ${num1}`);
    }else{
        console.log(`The bigger number is: ${ num2 }`)
    }
}

biggerNumber(8, 5);
// 8
biggerNumber(-5, 10)
// 10

//Space Letters
// Create a function that takes in a string parameter representing some words or a sentence, and returns or logs that string with spaces in between all the characters.
const spaceLetters = (stringToSplit)=>{
    const arrayOfStrings = stringToSplit.split("");
    console.log(arrayOfStrings);
    const spaceStr = arrayOfStrings.join(" ");
    console.log(spaceStr);
}

spaceLetters("Hello world!");
// "H e l l o   w o r l d !"

// Find string in array
// Create a function that takes in two parameters: a string and an array of strings. It should attempt to find the string inside of the array, and return whether the search was successful or not.
const containsString = (str, array) =>{

    const item = array.indexOf(str);
    return item >= 0;
}

containsString('turtle', ['hammer', 'dog', 'bismuth']);
// false
containsString('bagel', ['brioche', 'bagel', 'baguette']);
// true

// Count a letter
// Write a function that that accepts two string arguments, a single letter, and a passage of text to search within. The function should count the number of occurrences of the specified letter within the larger string.
const letterCount=(string,userLetter)=>{
    //split the string so it becomes an array
        stringSplit = string.split('');
    //use filter, filter will match the letter with the string array and return a new array with all the matches
            const itMatches = stringSplit.filter(letter => {
                return letter === userLetter;
            });
        console.log(itMatches);
    //use itMatches.length to see the length of the new array created by filter
        console.log(`The letter "${userLetter}" matches "${string}" ${itMatches.length} times. `);
    }

letterCount('Hello world!', 'o');
// 2

//Vowel Count
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels! Ignore the letter ‘Y’.

const countVowels = (string) => {
    string = string.toLowerCase();
    let array = string.split("");

    let numberOfVowels = 0;

    const vowels = ["a", "e", "i", "o", "u"];

 
    for(let i = 0; i < array.length; i++){
        if(array.includes(vowels[i])){
            numberOfVowels++;
        }
    }
    console.log(`There are ${numberOfVowels} vowels in ${string}`);
}

countVowels('The quick brown fox');
// 5
countVowels('whrrmyvwlst')
// 0
countVowels('AeIOuy');
// 5

// Second Highest 
//Create a function that takes in a list of numbers, and returns the second highest number from those numbers.

const secondHighest = (numberArray) => {
    //find higest number
    const highestNumber = Math.max(...numberArray);
    const removeNum = numberArray.indexOf(highestNumber);
    //take out highest number create new array
    if(removeNum > -1){
        numberArray.splice(removeNum,1);
    }
    //find highest in new array
    const secondHighest = Math.max(...numberArray);
    //console.log answer
    console.log(`The second highest number in the array is: ${secondHighest}`);
}

secondHighest([5, 8, 9, 2, -8]);
// 8
secondHighest([8, 16, 32, 64]);
// 32
secondHighest([5, 1, 3, 4]);
// 4
//Strings in common
//Write a function that takes in two arrays of any length, and reports on any values it found in common. If no common entries are found, it should return an appropriate value.

const stringsInCommon = (array1, array2) => {
    const a1IsArray = Array.isArray(array1);
    const a2IsArray = Array.isArray(array2);
    if( !a1IsArray && !a2IsArray){
        return false;
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

getFirstUniqueChar('abacDdbec')
// 'e'
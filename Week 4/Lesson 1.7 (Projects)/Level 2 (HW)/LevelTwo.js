//Strings in common
//Write a function that takes in two arrays of any length, and reports on any values it found in common. If no common entries are found, it should return an appropriate value.

const stringsInCommon = (array1, array2) => {
    const a1IsArray = Array.isArray(array1);
    const a2IsArray = Array.isArray(array2);
    if( !a1IsArray && !a2IsArray){
        return false;
    }
}
const numbers = [33, 45, 64, 22, 11, 88, 45, 11, 33, 33, 4, 04];

const numbers2 = [1, 4, 6, 22, 11, 88, 78];

//unique method 
//makes sure each item in your array is unique

const uniqueNumbers =_.uniq(numbers);

console.log(uniqueNumbers);
console.log(numbers);

//compares 2 arrays and shows unique numbers from the first array
const diffNumbers = _.difference(numbers, numbers2);

console.log(diffNumbers);

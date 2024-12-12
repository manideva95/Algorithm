// union of two sorted array

let array1 = [1, 2, 3, 4, 5];
let array2 = [2, 4, 5, 6];

let concat = array1.concat(array2);

let unionArray = [...new Set(concat)];

console.log(unionArray);

//left rotate array

let array = [1, 2, 3, 4, 5];

let temp = array[0];

for (let i = 1; i < array.length; i++) {
  array[i - 1] = array[i];
}
array[array.length - 1] = temp;

console.log(array);

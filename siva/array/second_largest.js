// https://www.geeksforgeeks.org/find-second-largest-element-array/

function secondLargestElement(nums) {
  console.log(nums);
  //   sort solution
  let output = nums.sort();
  console.log(output[nums.length - 2]);
  return output[nums.length - 2];
}

secondLargestElement([12, 35, 1, 10, 34, 1]);

// for loop approach

let firstLargestNumber = -1;
let secondLargestNumber = -1;

let array = [12, 35, 1, 10, 34, 1];
for (let i = 0; i < array.length; i++) {
  if (firstLargestNumber < array[i]) {
    firstLargestNumber = array[i];
  }
}
console.log(firstLargestNumber);
for (let j = 0; j < array.length; j++) {
  if (array[j] > secondLargestNumber && array[j] !== firstLargestNumber) {
    secondLargestNumber = array[j];
  }
}
console.log(secondLargestNumber);

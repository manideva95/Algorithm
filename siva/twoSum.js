let arr = [2, 7, 11, 15];
let target = 9;

//for loop approach

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] == target) {
      console.log(arr[i], arr[j]);
    } else {
      console.log("No possible answers");
    }
  }
}

//Two pointer approach
let left = 0;
let right = arr.length;

while (left < right) {
  if (arr[left] + arr[right] == target) {
    console.log(arr[left], arr[right]);
  } else if (arr[left] + arr[right] < target) {
    left++;
  } else {
    right++;
  }
}

// https://practice.geeksforgeeks.org/problems/print-alternate-elements-of-an-array/1/?page=1&difficulty[]=-2&category[]=Arrays&sortBy=submissions

function alternate(arr, n) {
  let output = "";
  for (let i = 0; i < n; i = i + 2) {
    output = output + arr[i] + " ";
  }
  console.log(output);
}
alternate([1, 2, 3, 4, 5, 6], 6);

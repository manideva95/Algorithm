// https://practice.geeksforgeeks.org/problems/print-the-pattern-set-1/1?page=1&difficulty[]=-2&sortBy=submissions

class Solution {
  printPat(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
      let resp = [];
      let N = n;
      let d = 1;
      for (let j = 0; j < (n * i); j++) {
        if (d <= i) {
          resp[j] = N;
          d++;
        } else {
          N = N - 1;
          resp[j] = N;
          d = 2;
        }
      }
      result[i - 1] = resp;
    }
    let stringArray = [];
    for (let i = 0; i < result.length; i++) {
      stringArray[i] = result[i].join(' ')
    }
    console.log(stringArray);
    return stringArray.join(' $ ');
  }
}

new Solution().printPat(10);
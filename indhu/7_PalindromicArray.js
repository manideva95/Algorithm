// https://practice.geeksforgeeks.org/problems/palindromic-array-1587115620/1?page=1&difficulty[]=-2&sortBy=submissions

class Solution {
    PalinArray(arr, n) {
        let result = 1;
        for (let i = 0; i < arr.length; i++) {
            const data = String(arr[i]).split('').reverse().join('', ',');
            if (data !== String(arr[i])) {
                console.log(data);
                result = 0
            }
        }
        return result
    }
}

new Solution().PalinArray([5111, 222, 333, 444], 5)
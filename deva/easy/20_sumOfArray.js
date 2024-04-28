// https://practice.geeksforgeeks.org/problems/sum-of-array2326/1/?page=1&difficulty[]=-2&sortBy=submissions

class Solution {
    sum(arr, n) {
        // code here
        // eval(arr.join("+"))
        let result = 0;
        for (let i = 0; i < arr.length; i++) {
            const el = arr[i];
            result += el
        }
        return result
    }
}

(new Solution).sum([1, 2, 3, 4], 4)
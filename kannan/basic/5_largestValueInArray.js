// https://practice.geeksforgeeks.org/problems/largest-element-in-array4009/1?page=1&difficulty[]=-1&category[]=Arrays&sortBy=submissions

class Solution {
    largest(arr, n) {
        let output = 0;
        output = Math.max(...arr);
        console.log(output);
        return output;
    }
}
new Solution().largest([12, 34, 46, 96, 999, 23], 6);
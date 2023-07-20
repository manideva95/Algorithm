// https://practice.geeksforgeeks.org/problems/sum-of-array2326/1?page=1&difficulty[]=-2&category[]=Arrays&sortBy=submissions

class Solution {
    sum(arr, n) {
        let a = 0;
        for (let i = 0; i < n; i++) {
            a = a + arr[i];
        } return a;
    }
}
new Solution().sum([1, 2, 3, 4], 4);
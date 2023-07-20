//https://practice.geeksforgeeks.org/problems/value-equal-to-index-value1330/1/?page=1&difficulty[]=-2&category[]=Arrays&sortBy=submissions#

class Solution {
    valueEqualToIndex(arr, n) {
        let output = [];
        for (let i = 0; i < n; i++) {
            if (arr[i] == i + 1) {
                output.push(arr[i]);
            }
        }
        console.log(output);
        return output;
    }
}
new Solution().valueEqualToIndex([12, 3, 3, 4, 5, 6, 56, 67, 9, 11, 11], 11);

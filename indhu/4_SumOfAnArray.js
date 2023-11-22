// https://practice.geeksforgeeks.org/problems/sum-of-array-elements2502/1?page=1&difficulty[]=-2&sortBy=submissions

class Solution {
    sumElement(arr, n) {
        let data = 0;
        for (let i = 0; i < n; i++) {
            data = data + arr[i]
        }
        const data1 = arr.reduce((a, b) => a + b, 0);
        console.log(data1);
        return data
    }
}

new Solution().sumElement([2, 2, 2, 2, 2, 2], 6)
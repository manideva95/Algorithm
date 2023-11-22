// https://practice.geeksforgeeks.org/problems/second-largest3735/1?page=1&difficulty[]=-2&sortBy=submissions

class Solution {
    print2largest(arr, n) {
        // solution 1
        let large = arr[0];
        let second = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > large) {
                large = arr[i];
            }
        }
        for (let i = 0; i < arr.length; i++) {
            if (large !== second && arr[i] !== large && arr[i] > second) {
                second = arr[i]
            } else {
                second = arr[i]
            }
        }
        if (large === second) {
            second = -1
        }
        // solution 2
        const data = [...new Set(arr.map(arr => arr))]
        console.log(Math.max(...arr), data);
        console.log(second);
        return second
    }
}
new Solution().print2largest([269, 269, 269, 183], 5);
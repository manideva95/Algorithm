// https://practice.geeksforgeeks.org/problems/find-the-median0527/1

class Solution {
    find_median(arr) {
        let n = arr.length;
        let b = 0;
        let c = 0;
        let ac = arr.sort((a, b) => a - b);
        if (arr.length % 2 == 0) {
            b = Math.floor((((arr[(n / 2) - 1]) + (arr[(n / 2)])) / 2));
            return b;

        } else {
            c = (arr[(n / 2) - 0.5]);
            return c;
        }
    }
}
new Solution().find_median([90, 100, 78, 89, 67]);
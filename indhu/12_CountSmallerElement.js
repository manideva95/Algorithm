// https://practice.geeksforgeeks.org/problems/count-of-smaller-elements5947/1?page=1&difficulty[]=-2&sortBy=submissions

class Solution {
    countOfElements(arr, n, x) {
        let count=0;
        for (let i = 0; i < n; i++) {
            if (arr[i] <= x) {
                count++;
            }
        }
        console.log(count);
        return count;
    }
}

new Solution().countOfElements([1, 2, 2, 2, 5, 7, 9],7,2)
// https://practice.geeksforgeeks.org/problems/perfect-arrays4645/1?page=2&difficulty[]=-2&sortBy=submissions

class Solution {
    IsPerfect(arr, n) {
        let result;
        let count = arr.length - 1;
        let reverse = []
        for (let i = 0; i < arr.length; i++) {
            reverse[count] = arr[i];
            count--;
        }
        for (let i = 0; i < arr.length; i++) {
            if (reverse[i] !== arr[i])
            result = true
        }
        console.log(result ? 'NOT PERFECT' : 'PERFECT');
        return result ? 'NOT PERFECT' : 'PERFECT';
    }
}

const d=new Solution().IsPerfect([1, 2, 3, 2, 1], 5);
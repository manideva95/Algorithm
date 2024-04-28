//https://practice.geeksforgeeks.org/problems/perfect-arrays4645/1/?page=1&difficulty[]=-2&category[]=Arrays&sortBy=submissions

class Solution {
    IsPerfect(arr, n) {
        //code here
        let result
        for (let i = 0; i < arr.length; i++) {
            // console.log(arr[i], arr[(arr.length - 1) - i]);
            if (arr[i] === arr[(arr.length - 1) - i]) {
                result = 'PERFECT'
            } else {
                result = 'NOT PERFECT'
                break;
            }
        }
        console.log(result);
        return result
    }
}

new Solution().IsPerfect([1, 2, 3, 2, 1], 5)

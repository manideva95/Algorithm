//https://practice.geeksforgeeks.org/problems/count-of-smaller-elements5947/1/?page=1&difficulty[]=-2&sortBy=submissions#

class Solution {
    countOfElements(arr, n, x) {
        //code here
        let result = 0
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            if (element <= x) {
                result += 1
            }
        }
        return result
    }
}

(new Solution).countOfElements([1, 2, 4, 5, 8, 10], 6, 9)

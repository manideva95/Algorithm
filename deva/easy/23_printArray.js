// https://practice.geeksforgeeks.org/problems/print-elements-of-array4910/1/?page=1&difficulty[]=-2&sortBy=submissions#

class Solution {
    printArray(arr, n) {
        // code here
        let result = null;
        for (let i = 0; i < arr.length; i++) {
            let el = arr[i]
            result = result ? result + " " + el : el
        }
        console.log(result)
    }
}
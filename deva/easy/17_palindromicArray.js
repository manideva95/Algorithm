// https://practice.geeksforgeeks.org/problems/palindromic-array-1587115620/1/?page=1&difficulty[]=-2&sortBy=submissions

class Solution {

    PalinArray(arr, n) {
        //code here
        let result = true
        for (let i = 0; i < arr.length; i++) {
            const el = arr[i];
            console.log(el.toString().split("").reverse().join(""))
            if (el == el.toString().split("").reverse().join("")) {
                result = true
            } else {
                result = false
                break;
            }
        }
        return result ? 1 : 0
    }
}


let result = new Solution()
result.PalinArray([1001, 2002, 3121, 3003, 5005, 6006])
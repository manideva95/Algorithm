//https://practice.geeksforgeeks.org/problems/sum-of-digit-is-pallindrome-or-not2751/1?page=2&difficulty[]=-2&sortBy=submissions
class Solution {
    isDigitSumPalindrome(N) {
        //code here
        let num = 0
        let str = N.toString()
        for (let i = 0; i < str.length; i++) {
            num = num + parseInt(str[i])
        }
        return num == num.toString().split("").reverse().join("") ? 1 : 0
    }
}


console.log(new Solution().isDigitSumPalindrome("98"))

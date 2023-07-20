//https://practice.geeksforgeeks.org/problems/armstrong-numbers2727/1?page=2&difficulty[]=-2&sortBy=submissions

class Solution {
    armstrongNumber(n) {
        //code here
        let str = n.toString()
        let res = 0;
        for (let i in str) {
            res = res + Math.pow(parseInt(str[i]), 3)
        }
        return res === n ? "Yes" : "No"
    }
}

console.log(new Solution().armstrongNumber(123));
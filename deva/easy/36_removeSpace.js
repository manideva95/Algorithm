//https://practice.geeksforgeeks.org/problems/remove-spaces0128/1?page=1&difficulty[]=-2&category[]=Strings&sortBy=submissions
class Solution {
    modify(s) {
        //code here
        // return console.log(s.replaceAll(' ', ''))
        return (s.split(" ").join(""))
    }
}

new Solution().modify(" hello wor ld ")
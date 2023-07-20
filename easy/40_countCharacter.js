//https://practice.geeksforgeeks.org/problems/count-type-of-characters3635/1?page=1&difficulty[]=-2&category[]=Strings&sortBy=submissions

class Solution {
    count(s) {
        //code here
        let lowerChars = s.length - s.replace(/[a-z]/g, '').length
        let upperChars = s.length - s.replace(/[A-Z]/g, '').length
        let numericChars = s.length - s.replace(/[0-9]/g, '').length
        let specialChars = s.replace(/[a-zA-Z0-9]/g, '').length
        return [upperChars, lowerChars, numericChars, specialChars]
    }
}

console.log(new Solution().count("h,(v#"));
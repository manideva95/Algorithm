// https://practice.geeksforgeeks.org/problems/reverse-digit0316/1?page=1&difficulty[]=-2&sortBy=submissions

class Solution{
    reverse_digit(n){
        let reverseString= n.toString().split('').reverse().join('');
        console.log(reverseString);
        return parseInt(reverseString)
    }
}
new Solution().reverse_digit(334)
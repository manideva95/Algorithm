// https://practice.geeksforgeeks.org/problems/reverse-digit0316/1?page=2&difficulty[]=-2&sortBy=submissions

class Solution {
    reverse_digit(n) {
        let rev = n.toString().split('').reverse().join('');
        // console.log(rev);
        let a = parseInt(rev);
        // console.log(a);
        return a;
    }
}
new Solution().reverse_digit(200);
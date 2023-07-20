// https://practice.geeksforgeeks.org/problems/sum-of-digit-is-pallindrome-or-not2751/1?page=2&difficulty[]=-2&sortBy=submissions

class Solution {
    isDigitSumPalindrome(N) {
        let add = N.toString().split('');
        console.log(add);
        let sum = 0;
        let el;
        for (let i = 0; i < add.length; i++) {
            el = Number(add[i]);
            console.log(el);
            sum = sum + el;
        }
        console.log(sum);
        let output;
        let rev = sum.toString().split('').reverse().join('');
        console.log(rev);
        if (sum == rev) {
            output = 1;
        } else {
            output = 0;
        }
        console.log(output);
        return output;
    }
}
new Solution().isDigitSumPalindrome(200);
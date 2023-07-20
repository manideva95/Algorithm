
class Solution {
    is_palindrome(n) {
        let output;
        let rev = n.toString().split('').reverse().join('');
        console.log(rev);
        if (n == rev) {
            output = "Yes";
        } else {
            output = "No";
        }
        console.log(output);
        return output;
    }
}
new Solution().is_palindrome(55555);
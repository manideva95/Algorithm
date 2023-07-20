//  https://practice.geeksforgeeks.org/problems/sum-palindrome3857/1?page=5&difficulty[]=-2&sortBy=submissions

class Solution {
    isSumPalindrome(N) {
        let final, output = N, res, ans, rev;
        let reves = N;
        let ex = N.toString().split('').reverse().join('');
        ex = Number(ex);
        if (N == ex) {
            final = N;
            // console.log(final);
            return final;
        } else {
            for (let i = 0; i < 5; i++) {
                rev = reves.toString().split('').reverse().join('');
                // console.log("rev=", rev);
                res = Number(rev);
                // console.log("res=", res);
                output = res + output;
                // console.log("output=", output);
                ans = output.toString().split('').reverse().join('');
                // console.log("ans=", ans);
                if (ans == output) {
                    final = ans;
                    break;
                }
                else {
                    final = -1;
                }
                reves = output;
            }
        }
        // console.log("final=", final);
        return final;
    }
}
new Solution().isSumPalindrome(1002);
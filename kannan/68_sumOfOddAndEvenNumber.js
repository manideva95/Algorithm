// https://practice.geeksforgeeks.org/problems/sum-of-odd-and-even-elements3033/1?page=5&difficulty[]=-2&sortBy=submissions

class Solution {
    find_sum(n) {
        let output1 = 0, output2 = 0, b = n, answer = "";
        for (let i = 0; i < n; i++) {
            if (b % 2 == 0) {
                // console.log("even=", b);
                output1 = output1 + b;
                // console.log("O1=", output1);
            } else {
                // console.log("odd=", b);
                output2 = output2 + b;
                // console.log("O2=", output2);
            }
            b--;
            // console.log("dec=", b);
        }
        answer = output2 + " " + output1;
        // console.log([answer]);
        return [answer];
    }
}
new Solution().find_sum(25);
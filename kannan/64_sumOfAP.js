// https://practice.geeksforgeeks.org/problems/sum-of-an-ap1025/1?page=5&difficulty[]=-2&sortBy=submissions

class Solution {
    sum_of_ap(n, a, d) {
        let output = (n / 2) * [2 * a + (n - 1) * d];
        // console.log(output);
        return output;
    }
}
new Solution().sum_of_ap(5, 1, 3);
// math equation from this site
// https://www.cuemath.com/algebra/arithmetic-sequence/
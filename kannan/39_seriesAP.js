// https://practice.geeksforgeeks.org/problems/series-ap5310/1?page=2&difficulty[]=-2&sortBy=submissions
class Solution {
    nthTermOfAP(A1, A2, N) {
        let output;
        let diff;
        diff = A2 - A1;
        output = A1 + ((N - 1) * diff);
        console.log(output);
        return output;
    }
}
new Solution().nthTermOfAP(100, 7, 3);


// math equation from this site
// https://www.cuemath.com/algebra/arithmetic-sequence/
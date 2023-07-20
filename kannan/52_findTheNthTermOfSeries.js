// https://practice.geeksforgeeks.org/problems/find-n-th-term-of-series-1-3-6-10-15-215506/1?page=4&difficulty[]=-2&sortBy=submissions

class Solution {
    findNthTerm(N) {
        let output;
        output = ((N * (N + 1)) / 2);
        console.log(output);
        return output;
    }
}
new Solution().findNthTerm(6);
// math answer from https://revisionmaths.com/gcse-maths-revision/number/number-sequences
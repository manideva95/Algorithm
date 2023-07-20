//https://practice.geeksforgeeks.org/problems/series-ap5310/1?page=2&difficulty[]=-2&sortBy=submissions
class Solution {
    nthTermOfAP(A1, A2, N) {
        //code here
        let a = A1 + (N - 1) * (A2 - A1);
        return a;
    }
}
console.log(new Solution().nthTermOfAP(1, 2, 10));
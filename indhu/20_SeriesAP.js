// https://practice.geeksforgeeks.org/problems/series-ap5310/1?page=2&difficulty[]=-2&sortBy=submissions

class Solution {
    nthTermOfAP(A1, A2, N) {
        const d = A2 - A1;
        let result =N === 2? A2:(N===1? A1:d+A2);
        for (let i = 0; i < N - 3; i++) {
            result = d + result;
        }
        console.log(result);
        return result;
    }
}

new Solution().nthTermOfAP(1203, 0, 1)
// https://practice.geeksforgeeks.org/problems/mean0021/1?page=3&difficulty[]=-2&sortBy=submissions

class Solution {
    mean(N, A) {
        let add = 0;
        for (let i = 0; i < N; i++) {
            add = add + A[i];
        }
        // console.log(add);
        let output = Math.floor(add / N);
        console.log(output);
        return output;
    }
}
new Solution().mean(4, [56, 67, 30, 79]);
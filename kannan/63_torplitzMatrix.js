// https://practice.geeksforgeeks.org/problems/toeplitz-matrix/1?page=5&difficulty[]=-2&sortBy=submissions

class Solution {
    isToepliz(A, N, M) {
        let output;
        // console.log(A);
        let a = A[0][0];
        // console.log(a);
        for (let j = 0; j < N && j < M; j++) {
            if (M == 1) {
                output = 1;
                break;
            }
            if (A[j][j] == a) {
                output = 1;
                // console.log(output);
            }
            else {
                output = 0;
                // console.log(output);
                break;
            }
        }
        console.log(output);
        return output;
    }
}
new Solution().isToepliz([[1, 2, 3, 4, 5, 6, 7, 8], [8, 1, 2, 3, 4, 5, 6, 7], [7, 8, 1, 2, 3, 4, 5, 6], [6, 7, 8, 2, 2, 3, 4, 5]], 4, 8);
// new Solution().isToepliz([24, 68, 36, 30, 3, 23, 59], 7, 1);
class Solution {
    sumOfMatrix(N, M, Grid) {
        let output = 0;
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < M; j++) {
                output = output + Grid[i][j];
            }
        }
        console.log(output);
        return output;
    }
}
new Solution().sumOfMatrix(2, 3, [[1, 0, 1], [-8, 9, -2]]);
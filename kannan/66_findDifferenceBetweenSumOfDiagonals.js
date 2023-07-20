// https://practice.geeksforgeeks.org/problems/find-difference-between-sum-of-diagonals1554/1?page=5&difficulty[]=-2&sortBy=submissions

class Solution {
    diagonalSumDifference(grid, n) {
        let output1 = 0, output2 = 0, answer;
        for (let i = 0; i < n; i++) {
            output1 = output1 + grid[i][i];
        }
        console.log(output1);
        let j = n - 1;
        for (let i = 0; i < n; i++) {
            output2 = output2 + grid[i][j];
            console.log(i, j, grid[i][j]);
            j--;
        }
        console.log(output2);
        answer = output2 - output1;
        console.log(answer);
        return answer;
    }
}
new Solution().diagonalSumDifference([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 3);
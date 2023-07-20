// https://practice.geeksforgeeks.org/problems/identical-matrices1042/1?page=5&difficulty[]=-2&sortBy=submissions

class Solution {
    areMatricesIdentical(n, grid1, grid2) {
        let output;
        // console.log(grid1, grid2);
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (grid1[i][j] == (grid2[i][j])) {
                    // console.log("i=", i, "j=", j, " grid1[i][j]=", grid1[i][j], " grid1[i][j]=", grid2[i][j]);
                    output = 1;
                } else {
                    return output = 0;
                }
            }
        }
        // console.log(output);
        return output;
    }
}
new Solution().areMatricesIdentical(4, [[1, 2, 4, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]], [[1, 2, 4, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]]);
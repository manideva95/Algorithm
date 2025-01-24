// https://leetcode.com/problems/modify-the-matrix/description/

// Topics
// Array
// Matrix

class Solution {
    public int[][] modifiedMatrix(int[][] matrix) {
        int[][] ans = new int[matrix.length][matrix[0].length];

        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[0].length; j++) {
                if (matrix[i][j] == -1) {
                    // If the current cell is -1, update it to the maximum value in its column.
                    ans[i][j] = matrix[i][j];

                    for (int k = 0; k < matrix.length; k++) {
                        if (ans[i][j] < matrix[k][j]) {
                            ans[i][j] = matrix[k][j];
                        }
                    }

                } else {
                    ans[i][j] = matrix[i][j]; // Copy the value for cells not equal to -1.
                }
            }
        }

        return ans;
    }
}
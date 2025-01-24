// https://leetcode.com/problems/check-if-grid-satisfies-conditions/description/

// Topics
// Array
// Matrix

class Solution {
    public boolean satisfiesConditions(int[][] grid) {
        int rows = grid.length;
        int cols = grid[0].length;

        for (int row = 0; row < rows; row++) {
            for (int col = 0; col < cols; col++) {
                // Check vertical condition (skip last row)
                if (row < rows - 1 && grid[row][col] != grid[row + 1][col]) {
                    return false;
                }

                // Check horizontal condition (skip last column)
                if (col < cols - 1 && grid[row][col] == grid[row][col + 1]) {
                    return false;
                }
            }
        }
        return true;
    }
}

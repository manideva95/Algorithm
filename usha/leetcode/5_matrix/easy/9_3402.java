// https://leetcode.com/problems/minimum-operations-to-make-columns-strictly-increasing/description/

// Array
// Greedy
// Matrix

class Solution {
    public int minimumOperations(int[][] grid) {
        int count = 0;
        for (int col = 0; col < grid[0].length; col++) {
            for (int row = 1; row < grid.length; row++) {
                // System.out.println("grid:::i:j====  " + grid[row][col]);
                if (grid[row][col] <= grid[row - 1][col]) {
                    count += grid[row - 1][col] + 1 - grid[row][col];
                    grid[row][col] = grid[row - 1][col] + 1;
                }
            }
        }
        return count;
    }
}
// https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/description/

// Topics
// Array
// Matrix

class Solution {
    public int[] findColumnWidth(int[][] grid) {
        int[] result = new int[grid[0].length];
        for (int col = 0; col < grid[0].length; col++) {
            for (int row = 0; row < grid.length; row++) {
                result[col] = Math.max(String.valueOf(grid[row][col]).length(), result[col]);
            }
        }

        return result;
    }
}
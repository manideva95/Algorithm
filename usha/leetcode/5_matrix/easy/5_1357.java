// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/description/

// Topics
// Array
// Matrix
//Binary search

class Solution {
    public int countNegatives(int[][] grid) {
        int count = 0;
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[i].length; j++) {
               // System.out.println("matrix  " + i + j + "::::" + grid[i][j]);
                if (grid[i][j] < 0) {
                    count++;
                }
            }
        }
        return count;
    }
}
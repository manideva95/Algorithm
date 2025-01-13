// https://leetcode.com/problems/find-champion-i/description/

// Topics
// Array
// Matrix

class Solution {
    public int findChampion(int[][] grid) {
        int n = grid.length;
        for (int i = 0; i < grid.length; i++) {
            int count = 0;
            for (int j = 0; j < grid[i].length; j++) {
                if (grid[i][j] == 1) {
                    count++;
                }
            }
            if (count == n - 1) {
                return i;
            }
        }
        return -1;
    }
}
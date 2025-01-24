// https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/description/

// Topics
// Array
// Hash Table
// Matrix

class Solution {
    public boolean checkValid(int[][] matrix) {
        for (int i = 0; i < matrix.length; i++) {
            HashSet<Integer> value = new HashSet<>();
            for (int j = 0; j < matrix.length; j++) {
                if (value.contains(matrix[i][j])) {
                    return false;
                } else {
                    value.add(matrix[i][j]);
                }
            }
        }
        for (int i = 0; i < matrix.length; i++) {
            HashSet<Integer> hs = new HashSet<>();
            for (int j = 0; j < matrix.length; j++) {
                if (hs.contains(matrix[j][i])) {
                    return false;
                } else {
                    hs.add(matrix[j][i]);
                }
            }
        }
        return true;
    }
}
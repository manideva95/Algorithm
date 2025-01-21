// https://leetcode.com/problems/lucky-numbers-in-a-matrix/description/

// Topics
// Array
// Matrix

class Solution {
    public List<Integer> luckyNumbers(int[][] matrix) {
        List<Integer> result = new ArrayList<>();

        int rowMax = Integer.MIN_VALUE;
        for (int i = 0; i < matrix.length; i++) {
            int rowMin = Integer.MAX_VALUE;
            for (int j = 0; j < matrix[i].length; j++) {
                rowMin = Math.min(rowMin, matrix[i][j]);
            }
            rowMax = Math.max(rowMin, rowMax);
        }

        int colMin = Integer.MAX_VALUE;
        for (int i = 0; i < matrix[0].length; i++) {
            int colMax = Integer.MIN_VALUE;
            for (int j = 0; j < matrix.length; j++) {
                colMax = Math.max(colMax, matrix[j][i]);
            }
            colMin = Math.min(colMax, colMin);
        }

        if (rowMax == colMin) {
            result.add(rowMax);
        }

        return result;

    }
}
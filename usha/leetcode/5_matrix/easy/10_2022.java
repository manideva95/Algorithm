// 2022. Convert 1D Array Into 2D Array

// Array
// Matrix
// Simulation

class Solution {
    public int[][] construct2DArray(int[] original, int m, int n) {
        int[][] result = new int[m][n];

        if (original.length != m * n) {
            return new int[0][0];
        }
        int index = 0;
        for (int row = 0; row < m; row++) {
            for (int col = 0; col < n; col++) {
                result[row][col] = original[index];
                index++;
            }
        }
        return result;
    }
}

//Formula to convert 1D array to 2D array is 
// (currentRow X number of Columns + currentColumn ) 
// result[row][column] = original[row * n + column];
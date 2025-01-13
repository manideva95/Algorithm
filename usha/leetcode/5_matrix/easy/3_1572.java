// https://leetcode.com/problems/matrix-diagonal-sum/description/

// Topics
// Array
// Matrix

class Solution {
    public int diagonalSum(int[][] mat) {
        int n=mat.length;
        int sum =0;

        for(int i=0;i<n;i++){
            sum += mat[i][i];
            sum += mat[n-1-i][i];
        }

        if(n%2 != 0){
            sum-=mat[n/2][n/2];
        }
        return sum;
    }
}
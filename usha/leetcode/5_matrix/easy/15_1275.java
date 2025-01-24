// https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/description/

// Topics
// Array
// Hash Table
// Matrix
// Simulation

class Solution {
    public String tictactoe(int[][] moves) {

        char [][]grid = new char[3][3];

        // Create empty grid(3 x 3)
        for(int i = 0; i < 3; i++) {
            for(int j = 0; j < 3; j++) {
                grid[i][j] = ' ';
            }
        }

        // Fill the grid according to moves(2d - array)
        // Even index - A moves
        // Odd index - B moves
        for(int k = 0; k < moves.length; k++) {
            int rowIdx = moves[k][0];
            int colIdx = moves[k][1];
            grid[rowIdx][colIdx] = (k % 2 == 0) ? 'X' : '0';
        }

        // Check for winner

        // Check Row And Column
        for(int i = 0; i < 3; i++) {
            // Row check
            if(grid[i][0] != ' ' && grid[i][0] == grid[i][1] && grid[i][1] == grid[i][2]) {
                return grid[i][0] == 'X' ? "A" : "B";
            }
            // Column check
            if(grid[0][i] != ' ' && grid[0][i] == grid[1][i] && grid[1][i] == grid[2][i]) {
                return grid[0][i] == 'X' ? "A" : "B";
            }
        }

        // Diagonal check
        if(grid[0][0] != ' ' && grid[0][0] == grid[1][1] && grid[1][1] == grid[2][2]) {
            return grid[0][0] == 'X' ? "A" : "B";
        }
        if(grid[0][2] != ' ' && grid[0][2] == grid[1][1] && grid[1][1] == grid[2][0]) {
            return grid[0][2] == 'X' ? "A" : "B";
        }

        // Check for Pending
        for(int i = 0; i < 3; i++) {
            if(grid[i][0] == ' ' || grid[i][1] == ' ' || grid[i][2] == ' ')   return "Pending";
        }

        return "Draw";
    }
}
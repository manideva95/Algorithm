// https://leetcode.com/problems/available-captures-for-rook/description/

// Topics
// Array
// Matrix
// Simulation

class Solution {
    public int numRookCaptures(char[][] board) {
        int rookRow = -1, rookCol = -1;
        int captures = 0;
        
        // Locate the Rook's position
        for (int i = 0; i < 8; i++) {
            for (int j = 0; j < 8; j++) {
                if (board[i][j] == 'R') {
                    rookRow = i;
                    rookCol = j;
                    break;
                }
            }
            if (rookRow != -1) break;
        }
        
        // Define movement directions: up, down, left, right
        int[][] directions = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
        
        // Traverse in all directions
        for (int[] dir : directions) {
            int x = rookRow, y = rookCol;
            
            while (true) {
                x += dir[0];
                y += dir[1];
                
                // Stop if out of bounds
                if (x < 0 || x >= 8 || y < 0 || y >= 8) break;
                
                // Stop if bishop encountered
                if (board[x][y] == 'B') break;
                
                // Capture pawn and stop
                if (board[x][y] == 'p') {
                    captures++;
                    break;
                }
            }
        }
        
        return captures;
    }
}
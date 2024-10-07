// https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/

/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
    let matrix = [...Array(3)].map(_ => Array(3).fill(0))
    for (let i = 0; i < moves.length; i++) {
        if (i % 2 === 0) {
            matrix[moves[i][0]][moves[i][1]] = 'X'
        } else matrix[moves[i][0]][moves[i][1]] = 'O'
    }
    return checkTheWinner(matrix)
};

// Alternate
const totalMoves = moves.length;
const moveCounters = new Array(8).fill(0);
for (let moveIdx = totalMoves - 1; moveIdx >= 0; moveIdx -= 2) {
    const [row, col] = moves[moveIdx];
    moveCounters[row]++;
    moveCounters[col + 3]++;
    if (row === col) {
        moveCounters[6]++;
    }
    if (row + col === 2) {
        moveCounters[7]++;
    }
    if (moveCounters[row] === 3 || moveCounters[col + 3] === 3 || moveCounters[6] === 3 || moveCounters[7] === 3) {
        return moveIdx % 2 === 0 ? 'A' : 'B';
    }
}
return totalMoves === 9 ? 'Draw' : 'Pending';

const checkTheWinner = (matrix) => {
    let diagonal = [[0, 0], [0, 0]]
    let emptyCount = 0;
    for (let i = 0; i < matrix.length; i++) {
        let rowCheck = [0, 0];
        let colCheck = [0, 0];
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 'X') rowCheck[0]++;
            if (matrix[i][j] === 'O') rowCheck[1]++;
            if (matrix[j][i] === 'X') colCheck[0]++;
            if (matrix[j][i] === 'O') colCheck[1]++;
            if (i === j && matrix[i][j] === 'X') diagonal[0][0]++;
            if ((i + j) === (matrix[0].length - 1) && matrix[i][j] === 'X') diagonal[0][1]++;
            if (i === j && matrix[i][j] === 'O') diagonal[1][0]++;
            if ((i + j) === (matrix[0].length - 1) && matrix[i][j] === 'O') diagonal[1][1]++;
            if (matrix[i][j] === 0) emptyCount++;
        }
        if (rowCheck[0] === 3 || colCheck[0] === 3) return 'A'
        if (rowCheck[1] === 3 || colCheck[1] === 3) return 'B'
    }
    if (diagonal[0][0] === 3 || diagonal[0][1] === 3) return 'A'
    if (diagonal[1][0] === 3 || diagonal[1][1] === 3) return 'B'
    if (emptyCount > 0) return 'Pending';
    else return 'Draw'
}

const result = tictactoe([[0, 0], [1, 1], [2, 0], [1, 0], [1, 2], [2, 1], [0, 1], [0, 2],])
console.log(result);

// Observation:
// output Time Complexity : O(n)
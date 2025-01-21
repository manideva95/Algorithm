// https://leetcode.com/problems/word-search/description/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const m = board.length;
    const n = board[0].length;

    const backtrack = (i, j, k) => {
        if (k === word.length) {
            return true;
        }
        if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word.charAt(k)) {
            return false;
        }

        const temp = board[i][j];
        board[i][j] = '\0';

        const result = backtrack(i + 1, j, k + 1) ||
            backtrack(i - 1, j, k + 1) ||
            backtrack(i, j + 1, k + 1) ||
            backtrack(i, j - 1, k + 1);

        board[i][j] = temp;
        return result;
    };

    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (backtrack(i, j, 0)) {
                return true;
            }
        }
    }
    return false;
    // let isValid = false
    // const recursion = (i, j, str, set) => {
    //     if (str === word) {
    //         isValid = true;
    //         return
    //     }
    //     console.log(str, set);

    //     if (i > board.length || j > board[0].length || str.length > word.length) return;

    //     let val = word[str.length];
    //     if (board[i - 1] && board[i - 1][j] === val && !set.has(`${i - 1}${j}`)) {
    //         recursion(i - 1, j, str + board[i - 1][j], set.add(`${i - 1}${j}`));
    //         set.delete(`${i - 1}${j}`)
    //     }
    //     if (board[i][j - 1] === val && !set.has(`${i}${j - 1}`)) {
    //         recursion(i, j - 1, str + board[i][j - 1], set.add(`${i}${j - 1}`));
    //         set.delete(`${i}${j - 1}`)

    //     }
    //     if (board[i + 1] && board[i + 1][j] === val && !set.has(`${i + 1}${j}`)) {
    //         recursion(i + 1, j, str + board[i + 1][j], set.add(`${i + 1}${j}`));
    //         set.delete(`${i + 1}${j}`)

    //     }
    //     if (board[i][j + 1] === val && !set.has(`${i}${j + 1}`)) {
    //         recursion(i, j + 1, str + board[i][j + 1], set.add(`${i}${j + 1}`));
    //         set.delete(`${i}${j + 1}`)
    //     }
    // }

    // for (let i = 0; i < board.length; i++) {
    //     for (let j = 0; j < board[0].length; j++) {
    //         if (isValid) return true
    //         if (board[i][j] === word[0]) {
    //             const set = new Set();
    //             set.add(`${i}${j}`);
    //             recursion(i, j, board[i][j], set)
    //         }

    //     }
    // }
    // return isValid
};



console.log(exist([["A", "B", "C", "E"], ["S", "F", "E", "S"], ["A", "D", "E", "E"]], "ABCESEEEFS"));


// a -> b -> c
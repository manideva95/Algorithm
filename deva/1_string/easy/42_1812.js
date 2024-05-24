// https://leetcode.com/problems/determine-color-of-a-chessboard-square/description/

/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
    const file = coordinates.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    console.log(coordinates.charCodeAt(0), 'a'.charCodeAt(0) + 1)
    console.log(file)
    const rank = parseInt(coordinates[1]);
    console.log(rank)
    return (file + rank) % 2 !== 0;
};

// in chessboard, the sum of the coordinates (file + rank) of any square will determine whether it's black or white.
// If the sum of the coordinates is odd, the square is black.
// If the sum of the coordinates is even, the square is white.
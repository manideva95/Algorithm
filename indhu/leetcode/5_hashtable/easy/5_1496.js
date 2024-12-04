// https://leetcode.com/problems/path-crossing/

/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
    let x = 0; let y = 0;
    let arr = new Set([`${x},${y}`])
    for (let root of path) {
        if (root == 'N') x++;
        if (root == 'S') x--;
        if (root == 'E') y++;
        if (root == 'W') y--;
        if (arr.has(`${x},${y}`)) return true;
        arr.add(`${x},${y}`)
    }
    return false
};

const result = isPathCrossing("NEEEEEEEEEENNNNNNNNNNWWWWWWWWWW")
console.log(result);

// Observation:
// output Time Complexity : O(n)
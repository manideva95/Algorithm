// https://leetcode.com/problems/equal-row-and-column-pairs/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
    let map = new Map(), n = grid.length, count = 0;
    for (let i = 0; i < n; i++) {
        let row = ''
        for (let j = 0; j < n; j++) {
            row += grid[i][j] + '/'
        }
        map.set(row, (map.get(row) || 0) + 1);
    }

    for (let i = 0; i < n; i++) {
        let col = ''
        for (let j = 0; j < n; j++) {
            col += grid[j][i] + '/'
        }
        const val = map.get(col)
        if (val) count += val;
    }
    return count
};
// https://leetcode.com/problems/letter-tile-possibilities/description/

/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
    let map = new Map();
    for (let tile of tiles) map.set(tile, (map.get(tile) || 0) + 1);
    const count = (map) => {
        let sum = 0;
        for (let [k, v] of map) {
            if (v === 0) continue;
            sum++
            map.set(k, map.get(k) - 1);
            sum += count(map, sum);
            map.set(k, map.get(k) + 1)
        }
        return sum
    }
    return count(map)
};
// https://leetcode.com/problems/destination-city/description/

/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
    let map = new Map(paths)
    function destination(value) {
        return map.get(value) ? destination(map.get(value)) : value
    }
    // console.log(map)
    // console.log(paths[0][0])
    return destination(paths[0][0])
};
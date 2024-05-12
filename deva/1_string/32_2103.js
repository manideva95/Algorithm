https://leetcode.com/problems/rings-and-rods/
/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
    let map = new Map()
    for (let i = 0; i < rings.length; i = i + 2) {
        let existingRod = map.get(rings[i + 1])
        if (existingRod) {
            let found = existingRod.find(element => element == rings[i])
            if (!found) {
                existingRod.push(rings[i])
            }
        } else {
            map.set(rings[i + 1], [rings[i]])
        }
    }
    let count = 0
    let arr = [...map.values()]
    for (let value of arr) {
        if (value.length === 3) {
            count++
        }
    }
    return count
};
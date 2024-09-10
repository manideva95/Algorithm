// https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/description/

/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
    let map = new Map(), result = []
    for (let i = 0; i < groupSizes.length; i++) {
        let val = map.get(groupSizes[i])
        if (val) {
            val[val.length - 1]?.length < groupSizes[i] ? val[val.length - 1].push(i) : val.push([i]);
            map.set(groupSizes[i], val)
        } else map.set(groupSizes[i], [[i]])
    }
    for (let [k, v] of map) {
        result.push(...v)
    }
    return result
};
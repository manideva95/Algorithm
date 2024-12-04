// https://leetcode.com/problems/finding-the-users-active-minutes/description/

/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function (logs, k) {
    let map = new Map();
    for (let log of logs) {
        let val = map.get(log[0]) || [];
        val.push(log[1])
        map.set(log[0], val)
    }
    let result = Array(k).fill(0);
    for (let [k, v] of map) {
        let set = new Set(v);
        result[set.size - 1] += 1
    }
    return result;
};
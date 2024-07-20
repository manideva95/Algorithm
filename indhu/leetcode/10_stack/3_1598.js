// https://leetcode.com/problems/crawler-log-folder/

/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
    let count = 0;
    logs.forEach((log) => {
        if (log === '../' && count) count--;
        else if (log !== './' && log !== '../') count++
    })
    return count;
};

const result = minOperations(["d1/", "d2/", "../", "d21/", "./"])
console.log(result);

// Observation:
// output Time Complexity : O(n)
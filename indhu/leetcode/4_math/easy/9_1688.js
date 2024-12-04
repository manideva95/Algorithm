// https://leetcode.com/problems/count-of-matches-in-tournament/

/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
    // let count = 0;
    // for (let i = n; i > 1;) {
    //     if (i % 2) {
    //         count = count + ((i - 1) / 2);
    //         i = ((i - 1) / 2) + 1;
    //     }
    //     else {
    //         count = count + (i / 2);
    //         i = (i / 2);
    //     }
    // }

    // return count

    // Alternate
    return n - 1
};

const result = numberOfMatches(4343)
console.log(result);

// Observation:
// output Time Complexity : O(1)
// https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/

/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
    let min = blocks.length;
    for (let i = 0; i <= blocks.length - k; i++) {
        min = Math.min(occurence(blocks.slice(i, i + k)), min)
    }
    return min
};

const occurence = (s) => {
    let count = 0;
    for (let c of s) {
        if (c == 'W') count++;
    }
    return count;
}

const result = minimumRecolors('WBBWWBBWBW', 7)
console.log(result);

// Observation:
// output Time Complexity : O(n)
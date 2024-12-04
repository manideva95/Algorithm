// https://leetcode.com/problems/shortest-distance-to-a-character/

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
    let ind = [];
    let result = Array(s.length).fill(0);
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) ind.push(i);
    }

    for (let i = 0; i < s.length; i++) {
        if (ind.length === 1 || ind[0] > i) result[i] = Math.abs(ind[0] - i);
        else {
            let min = s.length;
            let j = 0;
            while (j < ind.length) {
                if (Math.abs(ind[j] - i) > min) break
                min = Math.min(min, Math.abs(ind[j] - i));
                j++;
            }
            result[i] = min
        }
    }
    return result
};

const result = shortestToChar('bbbbbdbdfdfdbadfdfbadfbb', 'b')
console.log(result);

// Observation:
// output Time Complexity : O(nlogn)
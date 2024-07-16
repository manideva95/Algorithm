// https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/description/

/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function (word) {
    let minStep = 0;
    for (let i = 0; i < word.length; i++) {
        let step = minStep ? Math.abs(word.charCodeAt(i - 1) - word.charCodeAt(i)) : word.charCodeAt(i) - 97;
        if (step == 0) minStep += 1
        else step < 13 ? minStep += step + 1 : minStep += Math.abs(step - 26) + 1
    }
    return minStep
};

const result = minTimeToType('bya')
console.log(result);

// Observation:
// output Time Complexity : O(n)
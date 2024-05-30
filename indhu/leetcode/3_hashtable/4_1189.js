// https://leetcode.com/problems/maximum-number-of-balloons/

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
    let balloon = new Set(['b', 'a', 'l', 'l', 'o', 'o', 'n']);
    let maxNumberOfBalloons = new Map();
    for (let t of text) {
        if (balloon.has(t)) {
            let value = maxNumberOfBalloons.get(t);
            maxNumberOfBalloons.set(t, value ? ++value : 1)
        }
    }
    if (maxNumberOfBalloons.size !== 5) return 0
    return Math.min(
        maxNumberOfBalloons.get("b"),
        maxNumberOfBalloons.get("a"),
        Math.floor(maxNumberOfBalloons.get("l") / 2),
        Math.floor(maxNumberOfBalloons.get("o") / 2),
        maxNumberOfBalloons.get("n")
    );
};

const result = maxNumberOfBalloons("leet")
console.log(result);

// Observation:
// output Time Complexity : O(n)
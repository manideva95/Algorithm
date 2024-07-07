// https://leetcode.com/problems/find-the-difference/description/

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    // let set1 = s.split('').sort();
    // let set2 = t.split('').sort();

    // for (let i = 0; i < t.length; i++) {
    //     if (set1[i] !== set2[i]) return set2[i]
    // }

    let sTotal = 0
    let tTotal = 0
    const calculate = (string, total) => {
        return string.split('').reduce((total, char) => total + char.charCodeAt(), total)
    }
    return String.fromCharCode(calculate(t, tTotal) - calculate(s, sTotal))
};

const result = findTheDifference('a', 'aa')
console.log(result);

// Observation:
// output Time Complexity : O(n)

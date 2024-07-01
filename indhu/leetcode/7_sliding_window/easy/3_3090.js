// https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/

/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function (s) {
    let k = s.length;
    while (k >= 0) {
        let val = slidingWindow(s, k);
        if (val) return val;
        k--;
    }
};

const slidingWindow = (s, k) => {
    let map = new Map();
    for (let i = 0; i < k; i++) {
        let val = map.get(s[i])
        map.set(s[i], val + 1 || 1)
    }
    if (isValid(map)) return k

    for (let i = k; i < s.length; i++) {
        let val = map.get(s[i]);
        map.set(s[i], val + 1 || 1)
        map.set(s[i - k], map.get(s[i - k]) - 1);
        if (map.get(s[i - k]) === 0) map.delete(s[i - k]);
        if (isValid(map)) return k
    }

}

const isValid = (map) => {
    for (let [c, v] of map) {
        if (v > 2) return false
    }
    return true
}

const result = maximumLengthSubstring('an')
console.log(result);

// Observation:
// output Time Complexity : O(nlogn)


// https://leetcode.com/problems/find-smallest-letter-greater-than-target/description/

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
    let start = 0, end = letters.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (letters[mid] > target && letters[mid - 1] <= target) return letters[mid];

        if (letters[mid] <= target) start = mid + 1;
        else end = mid - 1
    }
    return letters[0]
};
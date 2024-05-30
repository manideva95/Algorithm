// https://leetcode.com/problems/ransom-note/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    if (ransomNote.length > magazine.length) return false;
    let map = magazine.split('');
    for (let note of ransomNote) {
        let ind = map.indexOf(note)
        if (ind > -1) {
            map.splice(ind, 1)
        } else return false;
    }
    return true

    // Alternate
    for (let i = 0; i < magazine.length; i++) {
        const char = magazine[i];
        ransomNote = ransomNote.replace(char, "");
    }

    return ransomNote.length === 0;
};

const result = canConstruct('aaa', 'aab')
console.log(result);

// Observation:
// output Time Complexity : O(n logn)
// https://leetcode.com/problems/count-the-number-of-consistent-strings/

class Solution {

    // topic: string, hash table, bit maniplutation, array

    fn(allowed, words) {
        let count = 0;
        let result = []
        for (let word of words) {
            if (isContain(word, allowed)) {
                count++;
                result.push(word)
            }
        }
        console.log(result);
        return count
    }

}

function isContain(word, allowed) {
    for (let c of word) {
        if (!allowed.includes(c)) {
            return
        }
    }
    return word
}

const data = new Solution().fn('ab', ["ad", "bd", "aaab", "baa", "badab"]);
console.log(data);




// Observation:


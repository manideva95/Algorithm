// https://leetcode.com/problems/check-if-the-sentence-is-pangram/description/

class Solution {

    // topic: string
    fn(s) {
        let alphabets = "abcdefghijklmnopqrstuvwxyz"
        for (let c of s) {
            alphabets = alphabets.replace(c, '')
        }
        return alphabets ? false : true
    }
}

const data = new Solution().fn('leetcode');
console.log(data);

// Observation:
// vocabulary: pangram
// input: lowercase string
// output: replace . to [.]
// Methods: replace() [time complexity : O(n)]
// output Time Complexity : O(n log n)


// Alternate
//  const set = new Set();

// if (sentence.length < 26) return false;
// return (new Set(sentence.split('')).size === 26)
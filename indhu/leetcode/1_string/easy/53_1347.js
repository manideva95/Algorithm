// https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/

class Solution {

    // topic: hashtable, string, count
    fn(s, t) {
        // let count = 0;
        // for (let element of t) {
        // if (s.includes(element)) {       //O(N)
        // s = s.replace(element, '');   //O(N)
        //     } else {
        //         count++;
        //     }
        // }
        // return count

        // Alternate

        const alphabets = Array(26).fill(0);
        let result = 0;
        for (let index = 0; index < s.length; index++) {
            alphabets[s.charCodeAt(index) - 'a'.charCodeAt(0)]++;  //O(1)
            alphabets[t.charCodeAt(index) - 'a'.charCodeAt(0)]--;  //O(1)
        }

        for (let count of alphabets)
            result += Math.max(0, count);

        return result;
    }

}

const data = new Solution().fn('aab', 'bba');
console.log(data);

// Observation:
// vocabulary: anagram

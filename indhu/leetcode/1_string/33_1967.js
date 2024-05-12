// https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/description/

class Solution {

    // topic: string
    fn(patterns, word) {
        let count = 0
        patterns.forEach(element => {
            if (word.includes(element)) {
                count++;
            }
        });
        return count
    }
}

const data = new Solution().fn(['a', 'b', 'bc'], 'abc');
console.log(data);

// Observation:
// vocabulary: contiguous

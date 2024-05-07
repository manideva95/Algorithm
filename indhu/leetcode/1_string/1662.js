// https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/

class Solution {

    // topic: string, array
    fn(word1, word2) {
        return word1.join('') === word2.join('')
    }

}

const data = new Solution().fn(['a', 'bc'], ['ab', 'cd']);
console.log(data);

// Observation:
// input: lower case
// output: concat array of string and check
// Methods: join() [time complexity : O(n)]
// output Time Complexity : O(2n)

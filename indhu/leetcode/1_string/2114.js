// https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/submissions/1239864130/

class Solution {
    // topic: string, array
    fn(s) {
        // let result = 0;
        // for (let i = 0; i < s.length; i++) {
        //     const data = s[i].split(' ');
        //     if (result < data.length) {
        //         result = data.length
        //     }
        // }
        // return result
        return Math.max(...s.map(s => s.split(' ').length));
    }

}

const data = new Solution().fn(["please wait", "continue to fight", "continue to win"]);
console.log(data);

// Observation:
// vocabulary: trailing space
// input: No leading and trailing space, separated by single space.
// output: Max numb of words in sentence
// Methods: split() [time complexity : O(n)]
// output Time Complexity : 


// Alternate
//  Math.max(...sentences.map(s => s.split(' ').length));
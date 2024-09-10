
// https://leetcode.com/problems/score-of-a-string/

class Solution {

    fn(s) {
        let result = 0;
        for (let i = 1; i < s.length; i++) {
            result = result + Math.abs(s.charCodeAt(i - 1) - s.charCodeAt(i))
        }
        return result
    }

}

const data = new Solution().fn('zaz');
console.log(data);

// Observation:
// vocabulary: absolute different 
// input: s lowercase only, 2 to 100 char
// output: sum of the different of adjacent char
// topic: string
// Methods: Math.abs() [time complexity : O(1)], charCodeAt() [time complexity : O(n)] //doubt
// output Time Complexity : doubt
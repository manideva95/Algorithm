// https://leetcode.com/problems/goal-parser-interpretation/description/

class Solution {
    // only string mentioned so not to use array
    fn(s) {
        let result = ''
        for (let i = 0; i < s.length;) {
            if (s[i] == 'G') {
                result = result.concat('G')
                i++;
            } else if (s[i] == '(' && s[i + 1] == ')') {
                result = result.concat('o')
                i = i + 2;
            } else {
                result = result.concat('al')
                i = i + 4;
            }
        }
        return result
    }

}

const data = new Solution().fn('(al)G(al)()()G');
console.log(data);

// Observation:
// word: Parser
// input: only 4 command
// output: concat command
// topic: string
// Methods: concat() [time complexity : O(n)] //doubt
// output Time Complexity : 


// Alternate
// result = result + 'al' 
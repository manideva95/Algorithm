// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/description/

class Solution {

    // topic: string, stack
    fn(s) {
        let ans = 0;
        let opened = 0;

        for (let c of s) {
            if (c === '(') {
                opened++;
                ans = Math.max(ans, opened);
            } else if (c === ')') {
                opened--;
            }
        }

        return ans;
    }

}

const data = new Solution().fn("(1+(2*3)+((8)/4))+1");
console.log(data);

// Observation:
// input: valid parentheses string
// output: max nested parantheses
// Methods: for of [time complexity : O(n)]
// output Time Complexity : O(n)


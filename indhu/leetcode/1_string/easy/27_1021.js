// https://leetcode.com/problems/remove-outermost-parentheses

class Solution {

    // topic: string, stack
    fn(s) {
        let countParentParenthese = 0;
        let result = ''
        for (let c of s) {
            if (c == '(') {
                countParentParenthese++;
                if (countParentParenthese !== 1) {
                    result = result + c
                }
            }
            if (c == ')') {
                countParentParenthese--;
                if (countParentParenthese !== 0) {
                    result = result + c
                }
            }

        }
        return result
    }

}

const data = new Solution().fn('()()');
console.log(data);

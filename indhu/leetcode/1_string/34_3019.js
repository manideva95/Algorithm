// https://leetcode.com/problems/number-of-changing-keys/description/

class Solution {

    // topic: string
    fn(s) {
        let count = 0;
        for (let i = 0; i < s.length; i++) {
            if ((i !== s.length - 1) && s[i].toLowerCase() !== s[i + 1].toLowerCase()) {
                count++;
            }
        }
        return count
    }
}

const data = new Solution().fn('AaAaAaaA');
console.log(data);

// Note: Modifiers like shift or caps lock won't be counted 
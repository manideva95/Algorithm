// https://leetcode.com/problems/remove-trailing-zeros-from-a-string/description/

class Solution {

    // topic: string
    fn(s) {
        if (s[s.length - 1] != 0) {
            console.log(s[s.length - 1]);
            return s
        }
        for (let i = s.length - 1; i >= 0; --i) {
            if (s[i] == 0) {
                continue
            } else {
                return s.substring(0, i + 1)
            }
        }
    }

}

const data = new Solution().fn('50');
console.log(data);

// Observation:
// input: num doesn't have any leading zeros.
// output Time Complexity : O(n*m)


// https://leetcode.com/problems/reverse-string/

class Solution {

    // topic: string, two pointer
    fn(s) {
        // return s.reverse()
        let i = 0;
        let j = s.length - 1;
        while (i < j) {
            [s[i], s[j]] = [s[j], s[i]]
            i++;
            j--;
        }
        return s
    }

}

const data = new Solution().fn(["H", "a", "n", "n", "a", "h"]);
console.log(data);

// Observation:
// vocabulary: in-place


// https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/description/

class Solution {

    // topic: string, array
    fn(words, s) {
        if (s.length !== words.length) {
            return false
        }
        for (let i = 0; i < s.length; i++) {
            if (s[i] !== words[i][0]) {
                return false
            }
        }
        return true
    }

}

const data = new Solution().fn(["alice", "bob", "charlie"], "abc");
console.log(data);

// Observation:
//O/P 

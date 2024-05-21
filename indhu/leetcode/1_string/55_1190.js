// https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/

class Solution {

    // topic: string, stack
    fn(s) {
        for (let i = 0; i < s.length; i++) {
            if (s[i] == ')') {
                let j = i;
                while (j >= 0) {
                    if (s[j] === '(') {
                        s = s.substring(0, j) + s.substring(j + 1, i).split('').reverse().join('') + s.substring(i + 1, s.length)
                        i = i - 2
                        break
                    }
                    j--;
                }
            }
        }
        return s
    }
}



const data = new Solution().fn('(s)');
console.log(data);

// Observation:
// vocabulary: defanged
// input: valid ip
// output: replace . to [.]
// Methods: replaceAll() [time complexity : O(n * m)]
// output Time Complexity : O(n*m)



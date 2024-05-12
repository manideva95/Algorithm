// https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/description/

class Solution {

    // topic: string
    fn(s) {
        let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        let result = '';
        for (let i = 0; i < s.length;) {
            if (s[i + 2] == '#') {
                result = result + alphabets[parseInt(`${s[i]}${s[i + 1]}`) - 1]
                i = i + 3;
            } else {
                result = result + alphabets[parseInt(s[i]) - 1]
                i++;
            }
        }
        return result
    }

}

const data = new Solution().fn('1326#');
console.log(data);

// Observation:




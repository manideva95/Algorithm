// https://leetcode.com/problems/replace-all-digits-with-characters/description/

class Solution {

    // topic: string
    fn(s) {
        const splitedS = s.split('');
        for (let i = 0; i < splitedS.length; i++) {
            if (i !== 0 && i % 2 !== 0) {
                splitedS[i] = shift(splitedS[i - 1], parseInt(s[i]))
            }
        }
        return splitedS.join('')
    }

}

function shift(a, b) {
    const code = a.charCodeAt(0);
    return String.fromCharCode(code + b)
}

const data = new Solution().fn('a1b2c3d4e');
console.log(data);


// https://leetcode.com/problems/count-asterisks/description/

class Solution {

    // topic: string
    fn(s) {
        let countBar = 0;
        let result = 0;
        for (let c of s) {
            if (c == '|' && countBar == 0) {
                countBar++
            } else if (c == '|' && countBar == 1) {
                countBar--;
            }
            if (countBar == 0 && c == '*') {
                result++;
            }
        }
        return result;
    }

}

const data = new Solution().fn("*yo|uar|e**|b|e***au|tif****u|l");
console.log(data);


// Alternate
// int res = 0, bars = 0;
// for (int i = 0; i < s.length(); ++i) {
//     if (s.charAt(i) == '*' && bars % 2 == 0)
//         res++;
//     if (s.charAt(i) == '|')
//         bars++;
// }
// return res;
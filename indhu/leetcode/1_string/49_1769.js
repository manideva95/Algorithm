// https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/
// https://leetcode.com/problems/defanging-an-ip-address/description/

class Solution {

    // topic: string, array
    fn(s) {
        let result = [];
        for (let i = 0; i < s.length; i++) {
            let j = 0;
            let count = 0;
            while (j < s.length) {
                if (s[j] == 1 && (i !== j)) {
                    count = count + Math.abs(j - i);
                }
                j++;
            }
            result.push(count)
        }
        return result;
    }
}

const data = new Solution().fn('0');
console.log(data);

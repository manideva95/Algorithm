class Solution {
    countCamelCase(s) {
        let final = s.replace(/[a-z]/g, '');
        console.log(final);
        console.log(final.length);
        return final.length;
    }
}
// new Solution().countCamelCase("abcd");  // 0
// new Solution().countCamelCase("ckjkUUYII");  5
new Solution().countCamelCase("HKJT");


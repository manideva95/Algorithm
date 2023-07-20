class Solution {
    modify(s) {
        let result = s.replace(/\s+/g, '');
        console.log(result);
        return result;
    }
}
new Solution().modify("geeks  for geeks");
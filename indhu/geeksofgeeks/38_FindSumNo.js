class Solution {
    print(s, t) {
        let result;
        for (let i = 0; i < s.length; i++) {
            for (let j = 0; j < s.length; j++) {
                if (i !== j && s[i] + s[j] == t) {
                    return [i, j]
                }
            }
        }
        return false
    }
}

// new Solution().print('cat', 'rat');

console.log(new Solution().print([2, 1, 12, 7], 9));
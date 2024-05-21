class Solution {
    print(s, t) {
        let S = s.split('');
        let T = t.split('');
        let result = true
        if (S.length == T.length) {
            for (let i=0; i < S.length; i++) {
                const find = T.findIndex(item=>item == S[i])
                console.log(find);
                if (find < 0) {
                    result = false;
                    break;
                }
                T.splice(find,1)
            }
        } else {
            return false;
        }
        return result;
    }
}

// new Solution().print('cat', 'rat');

console.log(new Solution().print('aacc', 'ccaa'));
class Solution {

    twoSum(s) {
        let S = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '').split('')
        let i = 0;
        let j = S.length - 1;
        console.log(S);
        while (i !== j && j > ((S.length - 1) / 2)) {
            if (S[i] !== S[j]) {
                return false
            } else {
                i++;
                j--;
            }
        }
        return true
    }
}

const data = new Solution().twoSum("ab_   a");
console.log(data);



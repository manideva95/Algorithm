// https://leetcode.com/problems/di-string-match/description/

class Solution {

    // topic: string, twopointer, greedy, array
    fn(s) {
        let i = 0;
        let j = s.length;
        let result = [];
        for (let c of s) {
            if (c == 'I') {
                result.push(i);
                i++;
            }
            if (c == 'D') {
                result.push(j);
                j--;
            }
        }
        result.push(i)
        return result
    }

}

const data = new Solution().fn('DDDI');
console.log(data);

// Observation:
// vocabulary: permutation
// output Time Complexity : O(n)

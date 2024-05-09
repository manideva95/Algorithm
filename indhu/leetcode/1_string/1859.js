// https://leetcode.com/problems/sorting-the-sentence/

class Solution {

    // topic: string
    fn(s) {
        const split = s.split(' ');
        let result = [...split]
        for (let c of split) {
            result.splice(c.substring(c.length - 1) - 1, 1, c.substring(0, c.length - 1))
        }
        return result.join(' ')
    }

}

const data = new Solution().fn("is2 sentence4 This1 a3");
console.log(data);

// Observation:
// Methods: toLowerCase [time complexity : O(n)]

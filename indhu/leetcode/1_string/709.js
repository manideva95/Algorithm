// https://leetcode.com/problems/to-lower-case/description/

class Solution {

    // topic: string
    fn(s) {
        return s.toLowerCase()
    }

}

const data = new Solution().fn('Hello');
console.log(data);

// Observation:
// Methods: toLowerCase [time complexity : O(n)]

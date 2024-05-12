// https://leetcode.com/problems/shuffle-string/description/

class Solution {

    // topic: string, array
    fn(s, indices) {
        let result = [];
        indices.forEach((element, index) => {
            result[element] = s[index]
        });
        return result.join('')
    }

}

const data = new Solution().fn('ndiuh', [1, 2, 0, 4, 3]);
console.log(data);

// Observation:
// input: indices are unique.
// output: shuffle
// Methods: forEach() [time complexity : O(n)]
// output Time Complexity : O(n)

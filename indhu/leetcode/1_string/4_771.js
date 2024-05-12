// https://leetcode.com/problems/jewels-and-stones/description/

class Solution {

    fn(jewels, stones) {
        let result = 0;
        for (let i = 0; i < stones.length; i++) {
            if (jewels.includes(stones[i])) {
                result++
            }
        }
        return result
    }

}

const data = new Solution().fn("aA", "aAAbbbb");
console.log(data);

// Observation:
// input: jewels unique, case sensitive
// output: jewels contains in stones
// topic: string, hash table(hold)
// Methods: includes [O(n)]
// output Time Complexity : O(n^2)


// Alternate
// Set.has() [O(1)]
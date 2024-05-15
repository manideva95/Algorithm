// https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/description/

class Solution {

    // topic: string
    fn(s) {
        // let validate = s % 2 == 0 ? true : false;
        // let result = ''
        // for (let i = 0; i < (validate ? s - 1 : s); i++) {
        //     result = result + 'a'
        // }
        // if (validate) {
        //     result = result + 'c'
        // }
        // return result

        // Alternate

        return s % 2 ? 'a'.repeat(s) : `${'a'.repeat(n - 1)}b`
    }

}

const data = new Solution().fn(5);
console.log(data);

// Observation:
// input: 1 <= n <= 500
// output Time Complexity : O(n)


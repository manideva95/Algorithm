// https://leetcode.com/problems/faulty-keyboard/

class Solution {
    // topic: string, simulation

    fn(s) {
        let result = '';

        for (let c of s) {
            if (c == 'i') {
                result = result.split('').reverse().join('')
            } else {
                result = result + c
            }
        }
        return result
    }

}

const data = new Solution().fn('string');
console.log(data);

// Observation:
// input: s[0] != i
// output: reverse on i occurrence
// Methods: for of, split, reverse, join [time complexity : O(n)]
// output Time Complexity : O(3n log n)


// Alternate
// address.split(".").join('[.]')  split[O(n)], join[O(n)] => output  O(2n)

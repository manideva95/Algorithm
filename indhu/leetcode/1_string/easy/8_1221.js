// https://leetcode.com/problems/split-a-string-in-balanced-strings/description/

class Solution {

    // topic: string, greedy, counting

    fn(s) {
        let count = 0;
        let l = 0;
        let r = 0;
        s.split('').forEach((item, arr) => {
            if (item == 'L') {
                ++l
            } else {
                ++r
            }
            if (l === r) {
                count++;
                l = 0;
                r = 0;
            }
        })
        return count
    }

}

const data = new Solution().fn('LLLLRRRR');
console.log(data);

// Observation:
// input: Balanced string
// output: max balanced pair
// Methods: split() [time complexity : O(n)], forEach O(n)
// output Time Complexity : O(2n)


// Alternate:
// let count = 0;
// let l = 0;
// s.split('').forEach((item, arr) => {
//     if (item == 'L') {
//         ++l
//     } else {
//         --l
//     }
//     if (l === 0) {
//         count++;
//     }
// })
// return count
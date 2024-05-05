// https://leetcode.com/problems/final-value-of-variable-after-performing-operations/description/

class Solution {

    fn(s) {
        let X = 0;
        for (let i = 0; i < s.length; i++) {
            if (s[i] == "X++" || s[i] == "++X") {
                X = X + 1
            } else {
                X = X - 1
            }
        }
        return X

    }

}

const data = new Solution().fn(["++X", "++X", "X++"]);
console.log(data);

// Observation:
// vocabulary: Simulation
// input: 1 to 100 length and  only x++, ++x, --x, x--
// output: sum the operation
// topic: string, array, Simulation
// output Time Complexity : O(n)


// Alternate
//   return s.reduce((a, b) => {
//     if (b == "X++" || b == "++X") {
//         a++
//     } else {
//         a--
//     }
//     return a
// }, 0)
//  reduce[O(n)]
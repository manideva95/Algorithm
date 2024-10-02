// https://leetcode.com/problems/count-binary-substrings/

/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
    let count = 0, prev = 0, curr = 1;
    for (let i = 1; i < s.length; i++) {
        if (s[i] !== s[i - 1]) {
            count += Math.min(prev, curr);
            prev = curr;
            curr = 1;
        } else curr++;
    }
    return count + Math.min(prev, curr);

    // let count = 0, one = 0; zero = 0;
    // for (let i = 0; i < s.length; i++) {
    //     if (s[i] == 0) {
    //         if (one) {
    //             count++;
    //             one--;
    //         }
    //         ++zero;
    //     }
    //     if (s[i] == 1) {
    //         if (zero) {
    //             count++;
    //             zero--;
    //         }
    //         ++one;
    //     }
    // }
    // return count
};

const result = countBinarySubstrings('11001100')
console.log(result);

// Observation:
// output Time Complexity : O(n)

110011001
// https://leetcode.com/problems/maximum-odd-binary-number/description/

class Solution {

    // topic: string
    fn(s) {
        if (s.length == 1) {
            return s
        }
        let numberOfOnes = 0;
        let result = '';

        for (let c of s) {
            if (c == '1') {
                numberOfOnes++
            }
        }
        for (let i = 1; i <= s.length; i++) {
            if (i < numberOfOnes || i == s.length) {
                result = result + '1';
            } else {
                result = result + '0'
            }
        }
        return s
    }
}

const data = new Solution().fn('1000');
console.log(data);


// Alternate
// //   // get count of 1s
// const countOnes = (s.match(/1/g) || []).length 

// const remainingOnes = countOnes -1;

// // One of the 1s is the last digit. The required 0s to be placed at the beginning
// let result = String(1).padStart(s.length - remainingOnes, '0');

// result = result.padStart(s.length, '1'); // prefix balance 1s

// return result;
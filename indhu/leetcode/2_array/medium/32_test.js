


// User function Template for javascript
/**
 * @param {number[][]} matrix
 * @param {number} R
 * @param {number} C
 * @returns {number}
 */

class Solution {
    // Function to find median of the matrix.
    median(s, k) {
        let count = 0;
        for (let i = 0; i < s.length; i++) {
            let set = new Set();
            for (let j = i; j < s.length; j++) {
                set.add(s[j]);
                console.log(set, s[i])
                if (set.size === k) count++;
                if (set.size > k) break
            }
        }
        return count
    }
}

console.log(new Solution().median('aba', 2))
// https://leetcode.com/problems/defuse-the-bomb/

/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
    let result = [], sum = 0, n = code.length - 1;
    if (k === 0) return Array(code.length).fill(0)
    if (k < 0) {
        for (let i = n; i > n - Math.abs(k); i--) {
            sum += code[i]
        }
        result.push(sum);
        let l = (n - Math.abs(k)) + 1
        for (let i = 0; i < n; i++) {
            sum = sum - code[l] + code[i]
            result.push(sum)
            if (l == n) l = 0
            else l++
        }
    }
    if (k > 0) {
        for (let i = 1; i <= k; i++) {
            sum += code[i]
        }
        result.push(sum);
        k = k == n ? 0 : k + 1
        for (let i = 1; i < code.length; i++) {
            sum += code[k] - code[i]
            result.push(sum);
            if (k == n) k = 0
            else k++
        }
    }
    return result
};

const result = decrypt([5, 7, 1, 4], 2)
console.log(result);

// Observation:
// output Time Complexity : O(n)
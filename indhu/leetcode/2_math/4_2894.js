// https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/
/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function (n, m) {
    // let num2 = 0; let num1 = 0;
    // for (let i = 1; i <= n; i++) {
    //     if (!(i % m)) {
    //         num2 = num2 + i
    //     } else num1 = num1 + i
    // }
    // return num1 - num2

    // Alternate
    if (m >= n) {
        return m > n ? n * (n + 1) / 2 : n * (n - 3) / 2
    }
    if (m === 1) { return -n * (n + 1) / 2 }
    let t = (Math.floor(n / m))
    return (n * (n + 1) / 2) - (m * t * (t + 1))
};

const result = differenceOfSums(10, 3)
console.log(result);

// Observation:
// output Time Complexity : O(1)
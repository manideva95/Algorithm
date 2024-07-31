// https://leetcode.com/problems/find-the-distance-value-between-two-arrays/description/
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function (arr1, arr2, d) {
    let count = 0;
    for (let element of arr1) {
        let i = 0; j = arr2.length - 1, isValid = true;
        while (i <= j) {
            if (Math.abs(element - arr2[i]) <= d || Math.abs(element - arr2[j]) <= d) {
                isValid = false;
                break
            }
            i++; j--;
        }
        if (isValid) count++;
    }
    return count
};
// https://leetcode.com/problems/first-bad-version/

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let start = 0, end = n;
        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            let result1 = isBadVersion(mid);
            let result2 = isBadVersion(mid + 1);

            if (!result1 && result2) return mid + 1

            if (!result1) start = mid + 1
            else end = mid - 1

        }
    };
};
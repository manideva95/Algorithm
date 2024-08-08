// https://leetcode.com/problems/check-if-n-and-its-double-exist/description/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
    arr.sort((a, b) => a - b)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            let start = 0, end = arr.length - 1;
            while (start <= end) {
                let mid = Math.floor((start + end) / 2);
                if (arr[mid] === arr[i] / 2 && i !== mid) return true;
                if (arr[mid] > arr[i] / 2) end = mid - 1;
                else start = mid + 1
            }
        }
    }
    return false
};
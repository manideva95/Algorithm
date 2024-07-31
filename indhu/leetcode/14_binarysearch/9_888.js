// https://leetcode.com/problems/fair-candy-swap/description/

/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */

const binarySearch = (arr, val, start, end) => {
    if (end < start) return null;
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === val) return true;
    if (arr[mid] > val) return binarySearch(arr, val, start, mid - 1);
    else return binarySearch(arr, val, mid + 1, end)
}

var fairCandySwap = function (aliceSizes, bobSizes) {
    let aliceSum = 0, bobSum = 0;
    for (let i = 0; i < (aliceSizes.length > bobSizes.length ? aliceSizes.length : bobSizes.length); i++) {
        if (aliceSizes[i]) aliceSum += aliceSizes[i];
        if (bobSizes[i]) bobSum += bobSizes[i];
    }

    bobSizes.sort((a, b) => a - b);
    var sum = (bobSum + aliceSum) / 2;
    for (var i in aliceSizes) {
        f = binarySearch(bobSizes, sum + aliceSizes[i] - aliceSum, 0, bobSizes.length - 1);
        if (f) {
            return [aliceSizes[i], sum + aliceSizes[i] - aliceSum];
        }
    }
};
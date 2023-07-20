class Solution {
    swapKth(arr, n, k) {
        let b = arr[(k - 1)];
        arr[(k - 1)] = arr[(n - k)];
        arr[(n - k)] = b;
        console.log(arr.join(' '));
    }
}
new Solution().swapKth([1, 2, 3, 4, 5, 6, 7, 8], 8, 3);

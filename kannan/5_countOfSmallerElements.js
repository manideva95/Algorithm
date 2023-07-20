class Solution {
    countOfElements(arr, n, x) {
        let a = 0;
        for (let i = 0; i < n; i++) {
            if (arr[i] <= x) {
                a = a + 1;
            }
        }
        console.log(a);
        return a;

    }
}
new Solution().countOfElements([1, 2, 5], 3, 0)
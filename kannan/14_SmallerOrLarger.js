class Solution {
    getMoreAndLess(arr, n, x) {
        let a = 0;
        let b = 0;
        let c = "";
        for (let i = 0; i < n; i++) {
            if (arr[i] <= x) {
                a = a + 1;
            }
            if (arr[i] >= x) {
                b = b + 1;
            }
        }
        c = a + " " + b;
        console.log(c);
        return c;
    }
}
new Solution().getMoreAndLess([71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112], 42, 68);

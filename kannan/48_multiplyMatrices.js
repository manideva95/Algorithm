// https://practice.geeksforgeeks.org/problems/multiply-matrices/1?page=2&difficulty[]=-2&sortBy=submissions

class Solution {
    multiply(a, b, n) {
        let c = [[], []];
        console.log(a.length);
        console.log(b.length);
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                c[i][j] = 0;
                console.log(c);
                for (let k = 0; k < n; k++) {
                    c[i][j] = c[i][j] + a[i][k] * b[k][j];
                }
            }
        }
        console.log(c);
        return c;
    }
}
new Solution().multiply([[7, 8, 6, 4], [6, 7, 3, 10], [2, 3, 8, 1], [10, 4, 7, 1]], [[7, 3, 7, 2], [9, 8, 10, 3], [1, 3, 4, 8], [6, 10, 3, 3]], 4);

// not complete
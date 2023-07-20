//https://practice.geeksforgeeks.org/problems/multiply-matrices/1?page=2&difficulty[]=-2&sortBy=submissions
/**
 * @param {number[][]} a
 * * @param {number[][]} b
 * @param {number} n
 * @returns { }
*/

class Solution {
    multiply(a, b, n) {
        //code here
        let c = []
        for (let i = 0; i < a.length; i++) {
            const element = a[i];
            let arr = []
            for (let j = 0; j < element.length; j++) {
                let el = element[j]
                console.log(a[i][j], b[i][j]);
                arr.push(el * b[i][j])
            }
            c.push(arr)
        }

        return c
    }
}

console.log(new Solution().multiply([[7, 8], [2, 9]], [[14, 5], [5, 18]]))


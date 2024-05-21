// https://practice.geeksforgeeks.org/problems/find-index4752/1?page=2&difficulty[]=-2&sortBy=submissions

class Solution {
    findIndex(a, n, key) {
        let b = [];
        let startIndex;
        for (let i = 0; i < n; i++) {
            if (a[i] === key && !startIndex ) {
                b[0] = i;
                startIndex = i +1;
            } else if (a[i] === key) {
                b[1] = i
            }
            if (i === n - 1 && !(b[0])&& b[0]!==0  && !(b[1])) {
                b[0] = -1; b[1] = -1
            } else if (i === n - 1 && (b[0]|| b[0]===0) && !(b[1])) {
                let c=b[0]
                b[1] = c
            } 
        }
        console.log(b);
        return b;
    }
}

new Solution().findIndex([23 ,11, 24, 20, 22, 18, 30, 22, 14, 21, 15, 23, 11, 21, 14, 21, 28], 17, 23)
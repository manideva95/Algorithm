// https://practice.geeksforgeeks.org/problems/gcd-of-two-numbers3459/1?page=2&difficulty[]=-2&sortBy=submissions


class Solution {
    gcd(A, B) {
        let factorial = [];
        const n=A<B? A:B;
        let a = 0;
        for (let i = 1; i <= n; i++) {
            if (A % i === 0 && B % i === 0) {
                factorial[a] = i;
                a++;
            }
        }
        console.log(factorial[factorial.length-1]);
        return factorial[factorial.length-1];
    }
}

new Solution().gcd(9, 81)
// https://practice.geeksforgeeks.org/problems/gcd-of-two-numbers3459/1?page=3&difficulty[]=-2&sortBy=submissions

class Solution {
    gcd(N1, N2) {
        let arr1 = [];
        for (let i = 1; i <= N1; i++) {
            if (N1 % i == 0) {
                arr1.push(i);
            }
        }
        // console.log(arr1);
        let arr2 = [];
        for (let i = 1; i <= N2; i++) {
            if (N2 % i == 0) {
                arr2.push(i)
            }
        }
        // console.log(arr2);
        let result = arr1.filter(arr1 => arr2.includes(arr1));
        // console.log(result);
        let output;
        output = Math.max(...result);
        // 
        return (output);
    }
}
new Solution().gcd(45, 50);

// time error 
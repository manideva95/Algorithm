// https://practice.geeksforgeeks.org/problems/sum-of-digits1742/1?page=3&difficulty[]=-2&sortBy=submissions

class Solution {

    sumOfDigits(N) {
        let add = N.toString().split('');
        // console.log(add);
        let sum = 0;
        for (let i = 0; i < add.length; i++) {
            sum = sum + Number(add[i]);
        }
        console.log(sum);
        return sum;
    }
}
new Solution().sumOfDigits(12);
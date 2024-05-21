// https://practice.geeksforgeeks.org/problems/sum-of-digit-is-pallindrome-or-not2751/1?page=2&difficulty[]=-2&sortBy=submissions


class Solution {
    isDigitSumPalindrome(N) {
        const n = N.toString();
        let sum=0;
        let split=[]
        for (let i = n.length-1; i >= 0; i--) {
            sum =sum+ parseInt(n[i])
        }
        let s=sum.toString();
        let count=0;
        for (let i = s.length-1; i >= 0; i--) {
            split[count]=s[i];
            count++;
        }
        console.log(split.join(''),sum);
      return split.join('')==sum ? 1:0;
    }
}

new Solution().isDigitSumPalindrome(198)
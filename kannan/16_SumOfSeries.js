class Solution {
    seriesSum(n) {
        let a = 0;
        for (let i = 0; i <= n; i++) {
            a = a + i;
        } console.log(a);
        return a;
    }
}
new Solution().seriesSum(1);



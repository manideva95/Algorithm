//  https://practice.geeksforgeeks.org/problems/print-table0303/1?page=3&difficulty[]=-2&sortBy=submissions

class Solution {
    getTable(N) {
        let output = "";
        for (let i = 1; i <= 10; i++) {
            output = output + (i * N) + " ";
        }
        console.log([output]);
        return [output];  // using [ ] in output because the asked output in [ ]
    }
}
new Solution().getTable(45);
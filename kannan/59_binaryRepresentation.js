// https://practice.geeksforgeeks.org/problems/binary-representation5003/1?page=5&difficulty[]=-2&sortBy=submissions

class Solution {
    getBinaryRep(N) {
        //code here
        let a = N.toString(2);
        let n = a.length;
        let output = "";
        //   console.log(n);
        for (let i = 0; i < 30 - n; i++) {
            output = 0 + output;
        }
        output = output + '' + a;
        console.log(output);
        return output;
    }
}
new Solution().getBinaryRep(284);
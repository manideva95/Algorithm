class Solution {
    armstrongNumber(n) {
        let arr = n.toString().split('');
        let output = 0;
        let result;
        console.log(arr);
        for (let i = 0; i < arr.length; i++) {
            output = output + Math.pow(arr[i], 3);
        }
        console.log(output);
        if (output == n) {
            result = "Yes";
        } else {
            result = "No";
        }
        console.log(result);
        return result;
    }
}
new Solution().armstrongNumber(153);
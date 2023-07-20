class Solution {
    findRemainder(num1, num2) {
        let output;
        if (num1 < num2) {
            output = num1;
        } else {
            output = Math.ceil(num1 % num2);
        }
        console.log(output);
        return output;
    }
}
new Solution().findRemainder(5, 3);

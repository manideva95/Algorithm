// https://practice.geeksforgeeks.org/problems/replace-all-0-with-5-in-an-input-integer/1

class Solution {
    convertFive(n) {

        let letter = n.toString();
        let convert = letter.replace(/0/gi, 5);
        let output = convert.replace(/,/gi, '');
        console.log(output);
        return output;
    }
}

new Solution().convertFive(2);


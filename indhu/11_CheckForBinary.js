// https://practice.geeksforgeeks.org/problems/check-for-binary/1?page=1&difficulty[]=-2&sortBy=submissions

class Solution {
    isBinary(str) {
        const numbers = str.toString().split('');
        console.log(numbers);
        let valid;
        for (let i = 0; i < numbers.length; i++) {
            console.log(parseInt(numbers[i]));
            if (parseInt(numbers[i]) !== 0 && parseInt(numbers[i]) !== 1) {
                valid = true;
            }
        }
        console.log(valid ? 0 : 1);
        return valid ? 0 : 1;
    }
}

new Solution().isBinary(10111);;
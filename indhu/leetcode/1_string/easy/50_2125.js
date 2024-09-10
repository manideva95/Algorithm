// https://leetcode.com/problems/number-of-laser-beams-in-a-bank/

class Solution {

    // topic: string
    fn(bank) {
        if (bank.length == 1) {
            return 0
        }
        let resultArr = [];
        let result = 0;
        for (let x = 0; x < bank.length; x++) {
            let i = 0;
            let j = bank[x].length - 1;
            let count = 0;
            while (i <= j) {
                if (i == j && bank[x][i] == '1') {
                    count = count + 1;
                    break;
                }
                if (bank[x][i] == '1') {
                    count = count + 1;
                }
                if (bank[x][j] == '1') {
                    count = count + 1;
                }
                i++;
                j--;
            }
            if (count) {
                resultArr.push(count)
            }
        }
        if (result.length == 1) {
            return 0
        }
        for (let i = 0; i < resultArr.length - 1; i++) {
            result = result + resultArr[i] * resultArr[i + 1]
        }
        return result
    }

}

const data = new Solution().fn(["000", "111", "100"]);
console.log(data);


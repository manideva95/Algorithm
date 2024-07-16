// https://leetcode.com/problems/split-with-minimum-sum/

/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function (num) {
    let newArr = []
    for (let c of num.toString()) {
        newArr.push(c)
    }
    for (let j = 0; j < newArr.length - 1; j++) {
        if (newArr[j] > newArr[j + 1]) {
            [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]]
            j = -1;
        }
    }

    let i = 0, str1 = '', str2 = ''
    while (i < newArr.length) {
        if (i % 2) str1 += newArr[i]
        else str2 += newArr[i]
        i++;
    }
    return parseInt(str1) + parseInt(str2)
};

const result = splitNum(43252345)
console.log(result);


// Observation:
// output Time Complexity : O(n)
// https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/description/

/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function (current, correct) {
    current = current.split(':').map(el => el = parseInt(el))
    correct = correct.split(':').map(el => el = parseInt(el))
    let count = 0;

    if (correct[0] > current[0]) {
        if (correct[1] >= current[1])
            count = correct[0] - current[0]
        else count = correct[0] - current[0] - 1
    }
    if (correct[1] > current[1]) {
        let mins = current[1]
        while (correct[1] !== mins) {
            if ((correct[1] - mins) >= 15) mins += 15
            else if (correct[1] - mins >= 5) mins += 5
            else mins++;
            count++
        }
    } else if (correct[1] < current[1]) {
        let mins = 0, sum = (60 - current[1]) + correct[1]
        while (sum !== mins) {
            if ((sum - mins) >= 15) mins += 15
            else if (sum - mins >= 5) mins += 5
            else mins++;
            count++
        }
    }
    return count
};

const result = convertTime('00:40', '04:35')
console.log(result);

// Observation:
// output Time Complexity : O(n)
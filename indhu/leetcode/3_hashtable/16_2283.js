// https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/

/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
    let spilt = num.split('')
    for (let i = 0; i < spilt.length; i++) {
        let filter = spilt.filter(ele => ele == i);
        if (filter.length != spilt[i]) {
            return false
        }
    }
    return true

    // Alernate
    let map = {
        "0": 0,
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "5": 0,
        "6": 0,
        "7": 0,
        "8": 0,
        "9": 0,
    }
    for (let i = 0; i < num.length; i++) {
        if (!map[num[i]]) {
            map[num[i]] = 1;
        } else {
            map[num[i]] += 1;
        }
    }
    for (let i = 0; i < num.length; i++) {
        if (map[i] != num[i]) {
            return false;
        }
    }
    return true;
};

const result = digitCount("1210")
console.log(result);

// Observation:
// output Time Complexity : O(n2)
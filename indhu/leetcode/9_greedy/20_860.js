// https://leetcode.com/problems/lemonade-change/description/

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    if (bills[0] == 10 || bills[0] == 20) return false
    let fives = 0, tense = 0;
    for (let el of bills) {
        if (el == 5) fives++
        if (el == 10) {
            if (fives) fives--;
            else return false
            tense++;
        }
        if (el == 20) {
            if (fives && tense || fives >= 3) {
                if (tense) {
                    fives--; tense--;
                } else fives = fives - 3
            } else return false
        }

    }
    return true
};
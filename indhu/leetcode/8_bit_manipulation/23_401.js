// https://leetcode.com/problems/binary-watch/description/
/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {
    let result = []
    for (let h = 0; h < 12; h++) {
        for (let m = 0; m < 60; m++) {
            const hr = h.toString(2).replaceAll('0', '').length;
            const min = m.toString(2).replaceAll('0', '').length;
            if (hr + min === turnedOn) {
                result.push(`${h}:${m < 10 ? `0${m}` : `${m}`}`)
            }
        }
    }
    return result
};
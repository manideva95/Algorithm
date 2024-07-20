// https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/description/

/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function (time) {
    if (time[4] == '?') {
        time = time.slice(0, 4) + '9'
    }
    if (time[3] == '?') {
        time = time.slice(0, 3) + '5' + time.slice(4, 5)
    }
    if (time[1] == '?' && time[0] == '2') {
        time = time.slice(0, 1) + '3' + time.slice(2, 5)
    } else if (time[1] == '?' && time[0] == '?') time = '23' + time.slice(2, 5)
    else if (time[1] == '?') time = time.slice(0, 1) + '9' + time.slice(2, 5)


    if (parseInt(time[1]) <= 3 && time[0] == '?') {
        time = '2' + time.slice(1, 5)
    } else if (time[0] == '?') time = '1' + time.slice(1, 5)


    return time
};

const result = maximumTime("??:??")
console.log(result);

// Observation:
// output Time Complexity : O(n)
// https://leetcode.com/problems/construct-smallest-number-from-di-string/description/

/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function (pattern) {
    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    nums = nums.slice(0, pattern.length + 1);

    const checker = () => {
        for (let i = 0; i < pattern.length; i++) {
            if (pattern[i] === 'D' && nums[i] < nums[i + 1]) {
                backtrack();
                break;
            }
        }
    }

    const backtrack = () => {
        for (let i = 0; i < pattern.length; i++) {
            if (pattern[i] === 'D' && nums[i] < nums[i + 1]) {
                [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]]
            }
        }
        checker()
    }
    backtrack();


    return nums.join('')
};
// https://leetcode.com/problems/can-place-flowers/description/

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    for (let i = 0; (i < flowerbed.length && n > 0); i++) {
        if ((flowerbed[i] === flowerbed[i - 1] || flowerbed[i - 1] == undefined)
            && flowerbed[i + 1] !== 1
            && flowerbed[i] !== 1) {
            flowerbed[i] = 1
            n--;
            if (n == 0) break
        }
    }
    return n == 0 ? true : false
};
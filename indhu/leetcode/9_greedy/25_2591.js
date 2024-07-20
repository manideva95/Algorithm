// https://leetcode.com/problems/distribute-money-to-maximum-children/

/**
 * @param {number} money
 * @param {number} children
 * @return {number}
 */
var distMoney = function (money, children) {
    if (money < children) return -1;
    else if (money === children) return 0;

    let count = 0;
    money -= children;
    for (let i = 1; (i <= children && money > 6); i++) {
        count++;
        money -= 7


        if (money === 3 && (i + 1 === children || i === children)) {
            count--
            break
        } else if (money === 3) break

        if (i === children && money) {
            --count;
        }

    }
    return count ? count : 0
};

const result = distMoney(19, 2)


console.log(result);

// Observation:
// output Time Complexity : O(n)
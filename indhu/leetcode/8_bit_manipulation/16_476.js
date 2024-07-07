// https://leetcode.com/problems/number-complement/description/

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
    // num = num.toString(2);
    // let result = '';
    // for (let c of num) {
    //     result = `${result}${c === '0' ? '1' : '0'}`
    // }
    // return parseInt(result, 2)

    let mask = 1;
    while (mask < num) mask = (mask << 1) + 1;
    return num ^ mask;
};

const result = findComplement(5)
console.log(result);

// Observation:
// output Time Complexity : O(n)
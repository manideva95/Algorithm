// https://leetcode.com/problems/complex-number-multiplication/description/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function (num1, num2) {
    let [a, b] = split(num1);
    let [c, d] = split(num2);

    return ((a * c) - (b * d)).toString() + '+' + ((a * d) + (b * c)).toString() + 'i'

};


const split = (string) => {
    let val = ['', ''], isImaginary = false;
    for (let c of string) {
        if (isImaginary && c !== 'i') {
            val[1] += c
        } else if (c === '+') {
            isImaginary = true;
        } else val[0] += c
    }
    val[0] = parseInt(val[0]);
    val[1] = parseInt(val[1]);
    return val
}
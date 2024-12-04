// https://leetcode.com/problems/fraction-addition-and-subtraction/

/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function (expression) {
    let gcd = (a, b) => b == 0 ? a : gcd(b, a % b);

    let factors = [], factor = '';
    for (let c of expression) {
        if (c === '-' || c === '+') {
            factor && factors.push(factor);
            factor = '';
        } factor += c;
    }
    factor && factors.push(factor);

    let n = 0; d = 0;
    for (let i = 0; i < factors.length; i++) {
        let [num, demo] = factors[i].split('/');

        num = parseInt(num); demo = parseInt(demo);
        if (i === 0) {
            n = num; d = demo
        } else {
            n = (n * demo + num * d);
            d = (demo * d)
            let gcdVal = gcd(Math.abs(n), d);
            n /= gcdVal; d /= gcdVal
        }
    }
    return `${n}/${d}`
};
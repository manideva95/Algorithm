

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
    if (n === 0) return 0
    else if (n <= 2) return 1

    let sum = 2, prev1 = 1, prev2 = 1;

    for (let i = 4; i <= n; i++) {
        let temp1 = prev1, temp2 = prev2
        prev2 = prev1; prev1 = sum
        sum += temp1 + temp2;
    }

    return sum

    //Alternate
    if (n === 0)
        return 0;
    else if (n === 1)
        return 1;
    else if (n === 2)
        return 1;
    else {
        let trib = [0, 1, 1];
        for (let i = 3; i <= n; i++) {
            trib[i] = trib[i - 1] + trib[i - 2] + trib[i - 3];
        }
        return trib[n];
    }
};

const result = tribonacci(2)
console.log(result);
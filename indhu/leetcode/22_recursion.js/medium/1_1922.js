// https://leetcode.com/problems/count-good-numbers/description/
var countGoodNumbers = function (n) {
    n = BigInt(n)
    let mod = BigInt(1_000_000_007)
    let even = (n + 1n) / 2n
    let odd = n / 2n
    let first = pow(5n, even) % mod
    let second = pow(4n, odd) % mod

    console.log(n, mod, even, odd, first, second)
    return Number((first * second) % mod);



    function pow(x, n) {
        if (n === 0n)
            return 1n;
        let temp = pow(BigInt(x), n / 2n);
        if (n % 2n === 0n)
            return (temp * temp) % mod
        else
            return (x * temp * temp) % mod
    }
};

console.log(countGoodNumbers(2))
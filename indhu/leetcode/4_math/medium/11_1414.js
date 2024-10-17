// https://leetcode.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/

/**
 * @param {number} k
 * @return {number}
 */
var findMinFibonacciNumbers = function (k) {
    let fibonacci = [1, 1], count = 1;
    for (let i = 0; fibonacci[fibonacci.length - 1] <= k; i++) {
        let sum = fibonacci[i] + fibonacci[i + 1]
        if (sum > k) break
        fibonacci.push(sum);
    }
    //    let sum = Math.abs(k - fibonacci[fibonacci.length-1])
    //    if(sum === 0) return 1
    //    while(sum<k){
    //     let result = find(sum,fibonacci)
    //         count++;
    //     if(result.val === sum){
    //         break
    //     } else{
    //         sum -= result.val;
    //         fibonacci.slice(0,result.index)
    //     }
    //    }
    //    return count

    // Alternate
    // while (k > 0) {
    //     const num = fibs[--i]; // i is starting from the last position of the fibs array
    //     count += Math.floor(k / num);
    //     k %= num;;
    // }

    // console.log(Math.log(8) /
    //     Math.log(2),
    //     Math.log(4),
    //     Math.log(5),
    //     Math.log(6))

    // Initialize an empty
    // array to store the divisors
    let divisors = [];

    // Iterate up to the square
    // root of n to find divisors
    // Calculate the square root of n
    let n = 7
    let sqrtN = Math.sqrt(n);
    console.log(sqrtN)

    // Loop from 1 to the
    // square root of n
    for (let i = 1; i <= sqrtN; ++i) {
        // Check if i divides n
        // without leaving a remainder
        if (n % i === 0) {
            // Add divisor i to the array
            divisors.push(i);

            // Add the counterpart divisor
            // if it's different from i
            console.log(n / i, i)
            if (i !== n / i) {
                // Add the counterpart
                // divisor to the array
                divisors.push(n / i);
            }
        }
    }
    console.log(divisors)

    // Return the array of divisors
    return divisors;

};
const find = (val, arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] <= val) return { val: arr[i], index: i }
    }
}

const result = findMinFibonacciNumbers(3);
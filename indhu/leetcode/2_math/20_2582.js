// https://leetcode.com/problems/pass-the-pillow/

/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function (n, time) {
    // let q = [];
    // for (let i = 1; i <= n; ++i) q.push(i);
    // for (let i = n - 1; i > 1; --i) q.push(i);
    // let i = 0;
    // while (time > 0) {
    //     i = (i + 1) % q.length;
    //     --time;
    // }
    // return q[i];

    // Alternate
    let steps = n - 1
    let quotient = Math.floor(time / steps)
    let remainder = time % (steps)
    // Is quotient odd or even
    if (quotient % 2 === 0) {
        //even - direction: right / incrementing
        pos = 1 + remainder
    } else {
        //odd - direction: left / decrementing
        pos = n - remainder
    }
    return pos
};

const result = passThePillow(5, 10)
console.log(result);

// Observation:
// output Time Complexity : O(n)


// let times = Math.floor(time/(n-1))
// let reminder = time % (n-1)
//  if(times % 2 === 0){
//     return reminder + 1
//  }else{
//       return n-reminder
//  }


// https://leetcode.com/problems/total-distance-traveled/

/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */
var distanceTraveled = function (mainTank, additionalTank) {
    let result = 0;
    let i = 1;
    while (i <= mainTank) {
        result++;
        console.log(i);
        if (i % 5 == 0 && additionalTank) {
            // mainTank++
            additionalTank--
        } else i++
    }
    return result * 10



    // let maxDis = 0;
    // const mileage = 10;

    // while (mainTank >= 5 && additionalTank >= 1) {
    //     const add = mileage * 5;
    //     maxDis += add;
    //     mainTank -= 5;
    //     additionalTank -= 1;
    //     mainTank += 1;
    // }

    // const add = mileage * mainTank;
    // maxDis += add;
    // return maxDis;
};

const result = distanceTraveled(9, 3)
console.log(result);

// Observation:
// output Time Complexity : O(n)
// https://leetcode.com/problems/number-of-arithmetic-triplets/
/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {
    let count = 0;
    const findDiff = (s, e) => {
        while ((nums[e] - nums[s]) <= diff) {
            if ((nums[e] - nums[s]) === diff) {
                return e
            }
            e++
        }
    }
    for (let i = 0; i < nums.length - 1; i++) {
        let j = i + 1;
        if ((nums[j] - nums[i]) === diff) {
            let k = j + 1;
            if (findDiff(j, k)) count++
        } if ((nums[j] - nums[i]) < diff) {
            const value = findDiff(i, ++j)
            if (value) {
                let k = value + 1;
                if (findDiff(value, k)) count++
            }
        }
    }


    return count
};



const result = arithmeticTriplets([4, 5, 6, 7, 8, 9, 10], 1)
console.log(result);

// Observation:
// output Time Complexity : O(nlogn)
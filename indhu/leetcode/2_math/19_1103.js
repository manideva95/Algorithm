// https://leetcode.com/problems/distribute-candies-to-people/
/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
    let result = new Array(num_people).fill(0)
    let c = 1;
    for (let i = 0; i < result.length; i = (i + 1) % result.length) {
        if (candies - c < 0) {
            result[i] += candies;
            candies -= candies;
        } else {
            result[i] += c;
            candies -= c;
        }
        c++
        if (candies == 0) {
            break;
        }
    }
    return result
};

const result = distributeCandies(30, 3)
console.log(result);


// Observation:
// output Time Complexity : O(n)
























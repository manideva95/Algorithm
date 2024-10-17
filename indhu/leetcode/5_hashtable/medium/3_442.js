// https://leetcode.com/problems/find-all-duplicates-in-an-array/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    // let map = new Map();
    // for(let num of nums){
    //     map.set(num, (map.get(num)||0)+1);
    // }
    // nums =[];
    // for(let [k,val] of map){
    //     if(val === 2)nums.push(k)
    // }
    // return nums
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1;
        if (nums[index] < 0) {
            result.push(index + 1);
        }
        nums[index] = -nums[index];
    }

    return result;
};
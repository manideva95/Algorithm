/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function (nums) {

    // let result = []
    // for (let i = 0; i < nums.length; i++) {
    //     let prefixSum = 0
    //     for (let j = 0; j < nums.length; j++) {
    //         if(i!==j){
    //             prefixSum += Math.abs(nums[i]-nums[j])
    //         }
    //     }
    //     result.push(prefixSum)
    // }
    // return result;
    const totalSum = nums.reduce((acc, item) => acc += item, 0);
    let leftSum = 0;
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        const rightSum = totalSum - leftSum - nums[i];
        const leftCount = i;
        const rightCount = nums.length - i - 1;

        const leftTotal = (leftCount * nums[i]) - leftSum;
        const rightTotal = rightSum - (rightCount * nums[i]);

        result.push(leftTotal + rightTotal);
        leftSum += nums[i];
    }

    return result;
};
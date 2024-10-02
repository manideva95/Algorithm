// https://leetcode.com/problems/find-the-difference-of-two-arrays/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    //   let set1 = new Set(nums1);
    //   let set2 = new Set(nums2);
    //   let ans=[[],[]]
    // set1.forEach(val=>{
    //   if(!set2.has(val)) ans[0].push(val)
    // })
    // set2.forEach(val=>{
    //   if(!set1.has(val)) ans[1].push(val)
    // })
    //   return ans

    const a = new Set(nums1)
    const b = new Set(nums2)

    const result = [
        [...a].filter((n) => !b.has(n)),
        [...b].filter((n) => !a.has(n))
    ]

    return result
};
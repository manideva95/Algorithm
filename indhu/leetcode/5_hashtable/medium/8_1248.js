// https://leetcode.com/problems/count-number-of-nice-subarrays/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
    // let count = 0
    // for (let i = 0; i < (nums.length - k+1); i++) {
    //     let oddCount = 0;
    //     for (let j = i; j < nums.length; j = j + 2) {
    //         if (nums[j] % 2 && oddCount === k) break
    //         else if (nums[j] % 2) oddCount++;
    //         if (oddCount === k) {
    //             count++
    //         }
    //         if (j + 1 < nums.length) {
    //             if (nums[j + 1] % 2 && oddCount === k) break
    //             else if (nums[j + 1] % 2) oddCount++;
    //             if (oddCount === k) {
    //                 count++
    //             }
    //         }
    //     }
    // }
    // return count

    let res = 0
    let odd = 0
    let l = 0
    let mid = 0

    for (let r = 0; r < nums.length; r++) {
        if (nums[r] % 2) {
            odd++
        }

        while (odd > k) {
            if (nums[l] % 2) {
                odd--
            }

            l++
            mid = l
        }

        if (odd === k) {
            while (!(nums[mid] % 2)) {
                mid++
            }
            res += mid - l + 1
        }
    }

    return res
};
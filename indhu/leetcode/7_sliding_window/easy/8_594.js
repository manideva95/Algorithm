// https://leetcode.com/problems/longest-harmonious-subsequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
    nums.sort((a, b) => a - b);

    // for (let k = nums.length - 1; k > 0; k--) {
    //     let val = slidingWindow(nums, k);
    //     if (val) return val
    // }

    // return 0

    let count = 0;
    let i = 0, j = 1;

    while (j < nums.length) {
        console.log(1);
        if (nums[j] - nums[i] == 1) {
            count = Math.max(count, j - i + 1);
            j++;
        }
        else if (nums[j] - nums[i] == 0) {
            j++;
        }
        else {
            i++;
        }
    }
    return count;
};

// const slidingWindow = (nums, k) => {
//     for (let i = 0; i < nums.length - k; i++) {
//         let subsequence = nums.slice(i, i + k + 1);
//         if ((subsequence[subsequence.length - 1] - subsequence[0]) === 1) return subsequence.length
//     }
// }


const result = findLHS([383, 886, 777, 915, 793, 335, 386, 492, 649, 421, 362, 27, 690, 59, 763, 926, 540, 426, 172, 736, 211, 368, 567, 429, 782, 530, 862, 123, 67, 135, 929, 802, 22, 58, 69, 167, 393, 456, 11, 42, 229, 373, 421, 919, 784, 537, 198, 324, 315, 370, 413, 526, 91, 980, 956, 873, 862, 170, 996, 281, 305, 925, 84, 327, 336, 505, 846, 729, 313, 857, 124, 895, 582, 545, 814, 367, 434, 364, 43, 750, 87, 808, 276, 178, 788, 584, 403, 651, 754, 399, 932, 60, 676, 368, 739, 12, 226, 586, 94, 539, 795, 570, 434, 378, 467, 601, 97, 902, 317, 492, 652, 756, 301, 280, 286, 441, 865, 689, 444, 619, 440, 729, 31, 117, 97, 771, 481, 675, 709, 927, 567, 856, 497, 353, 586, 965, 306, 683, 219, 624, 528, 871, 732, 829, 503, 19, 270, 368, 708, 715, 340, 149, 796, 723, 618, 245, 846, 451, 921, 555, 379, 488, 764, 228, 841, 350, 193, 500, 34, 764, 124, 914, 987, 856, 743, 491, 227, 365, 859, 936, 432])
console.log(result);

// Observation:
// output Time Complexity : O(n)
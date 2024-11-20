// https://leetcode.com/problems/rotate-array/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    // let n = k > nums.length ? Math.floor(k / nums.length) : k
    // for (let i = 0; i < n; i++) {
    //     nums.unshift(nums.pop());
    // }
    // return nums

    // Alternative;
    k = k % nums.length;
    let last = k - 1;
    let i = 0;
    console.log(last)
    while (i < last) {
        [nums[i], nums[last]] = [nums[last], nums[i]];
        last--;
        i++;
    }
    console.log(nums)
    last = nums.length - 1;
    i = k;
    while (i < last) {
        [nums[i], nums[last]] = [nums[last], nums[i]];
        last--;
        i++;
    }
    nums.reverse();

    return nums

    // reverse(nums, 0, k - 1);
    // // reverse last n-k elements
    // reverse(nums, k, nums.length - 1);
    // // reverse whole array
    // reverse(nums, 0, nums.length - 1);
    // return nums

};

const reverse = (arr, start, end) => {
    while (start <= end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

// const result = rotate([1, 2, 3, 4, 5, 6, 7], 3)

// console.log(result);

//1,2,3,4,5,6,7  --> k = 10

//calculate the count k % length

// 4,5,6,7,1,2,3

// 0, 3

// 3,2,1  4,5,6,7

// right -> 0, 2


const test = (arr, k) => {
    let sum = 0;
    let j = 0, max = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        while (j <= i && sum > k) {
            sum -= arr[j];
            j++;
        }
        if (sum === k) max = Math.max(max, i - j + 1);
    }
    return max
}

let data = test([2, 11, 12, 20, 5, 1, 2, 7, 9], 15);
console.log(data)

//2, 11, 13, 20, 5, 1, 2, 7, 9

//s = 2, m = 0, r = -13  map= 2 -> 0

// s =13, m =0 , r = 0, map = 2, 13

// s = 25,  m= 0, r = 10, map = 2, 13, 25

// s= 45, m = 0, r= 25
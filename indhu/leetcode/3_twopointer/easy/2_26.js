class Solution {

    fn(nums) {
        let i = 0;
        while (i !== nums.length) {
            if (nums[i] === nums[i + 1]) {
                nums.splice(i, 1)
            } else {
                i++;
            }
        }
        return nums.length

        // let i = 0;
        // for(let j = 1; j< nums.length; j++) {
        //     if(nums[i] === nums[j]) {
        //         nums[j] = '_';
        //     } else {
        //         i++;
        //         nums[i] = nums[j];
        //     }
        // }

        // return i+1;
    }

}

const data = new Solution().fn([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
console.log(data);
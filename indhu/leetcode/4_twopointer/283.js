class Solution {

    fn(nums) {
        let l = nums.length
        for (let i = 0; i < l;) {
            if (nums[i] === 0) {
                nums.splice(i, 1);
                nums.push(0);
                i--;
                l--;
            }
            else {
                i++
            }
        }
        return nums;

        // let l = 0;
        // let r = 0;

        // while (r < nums.length) {
        //     if (nums[r] != 0) {
        //         [nums[l], nums[r]] = [nums[r], nums[l]];
        //         l++;
        //     }
        //     r++;
        // }

        // return nums;
    }

}

const data = new Solution().fn([0, 1, 0, 1, 0, 0, 1]);
console.log(data);
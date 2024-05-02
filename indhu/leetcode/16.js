class Solution {

    fn(nums, target) {

        let res = [];
        nums.sort((a, b) => a - b);
        let n;
        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }
            let j = i + 1;
            let k = nums.length - 1;

            while (j < k) {
                let total = nums[i] + nums[j] + nums[k];
                if (total > 0) {
                    res.push([nums[i], nums[j], nums[k]]);
                    n = this.findN(total, n, target);
                    k--;
                } else if (total < 0) {
                    res.push([nums[i], nums[j], nums[k]]);
                    n = this.findN(total, n, target);
                    j++;
                } else {
                    res.push([nums[i], nums[j], nums[k]]);
                    n = this.findN(total, n, target);
                    j++;
                    while (nums[j] === nums[j - 1] && j < k) {
                        j++;
                    }
                }
            }
        }
        return n;
    }

    findN(total, n, target) {
        const d = total - target
        if (n === undefined) {
            n = total
        } else {
            if (n > total) {
                n = total
            } else if (n < total && n < -1) {
                n = total
            }
        }
        return n
    }

}

const data = new Solution().fn([1, 0, -1, 0, -2, 2, -3, -1], -3);
console.log(data);
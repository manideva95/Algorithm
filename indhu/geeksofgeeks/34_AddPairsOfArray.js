class Solution {
    print(nums) {
        let result = [];
        let copy = nums
        for (let i = 0; i < copy.length; ) {
                let max = Math.max(...copy);
                let min = Math.min(...copy);
                result.push(max + min)
                let maxIndex = copy.indexOf(max);
                copy.splice(maxIndex, 1);
                let minIndex = copy.indexOf(min);
                copy.splice(minIndex, 1)
            console.log(copy);
            i=0;
        }
        console.log(Math.max(...result), result);
        return Math.max(result)
    }
}

new Solution().print([4, 1, 5, 1, 2, 5, 1, 5, 5, 4])
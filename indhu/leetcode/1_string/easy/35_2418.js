// https://leetcode.com/problems/sort-the-people/description/

class Solution {

    // topic: array, string, hashtable, sort
    fn(names, heights) {
        let sortHeights = [...heights].sort((a, b) => b - a)
        let result = [];
        sortHeights.forEach((element) => {
            const i = heights.findIndex(item => item === element);
            result.push(names[i])
        });
        return result
    }

}

const data = new Solution().fn(["Mary", "John", "Emma", 'indhu'], [180, 165, 170, 445]);
console.log(data);

// Observation:


// https://leetcode.com/problems/rings-and-rods/

class Solution {

    // topic: string, hast table
    fn(s) {
        let result = [];
        let count = 0;
        if (s.length < 6) {
            return 0
        }
        const split = s.split('');
        for (let i = 0; i < split.length; i = i + 2) {
            let newArr = true;
            let obj = new Set()
            result.forEach((element, index) => {
                if (Object.keys(element)[0] === split[i + 1]) {
                    element[split[i + 1]].add(split[i], split[i])
                    newArr = false;
                }
            })
            if (newArr) {
                result.push({ [split[i + 1]]: new Set([split[i]]) });
            }
        }
        result.forEach(element => {
            if (Object.values(element)[0].size == 3) {
                count++
            }
        })
        console.log(result);
        return count
    }

}

const data = new Solution().fn('B0R0G0');
console.log(data);




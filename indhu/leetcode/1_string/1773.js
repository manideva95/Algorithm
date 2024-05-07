// https://leetcode.com/problems/count-items-matching-a-rule/description/

class Solution {

    // topic: string, array
    fn(items, ruleKey, ruleValue) {
        let count = 0;
        items.forEach(element => {
            if (ruleKey == 'type' && element[0] === ruleValue) {
                count++;
            }
            if (ruleKey == 'color' && element[1] === ruleValue) {
                count++;
            }
            if (ruleKey == 'name' && element[2] === ruleValue) {
                count++;
            }
        });
        return count;
    }

}

const data = new Solution().fn([["phone", "blue", "pixel"], ["computer", "silver", "lenovo"], ["phone", "gold", "iphone"]], "color", "silver");
console.log(data);

// Observation:
// Methods: forEach() [time complexity : O(n)]
// output Time Complexity : O(n)


// https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/

class Solution {

    // topic: Array, string, Prefix sum
    fn(garbage, travel) {
        let result = [];
        // Alternate
        // only find travel count to include:

        for (let i = 0; i < 3; i++) {
            let j = 0;
            let travelPath = [];
            while (j < garbage.length) {
                let count
                if (i == 0) count = findOccurrence(garbage[j], 'M');
                if (i == 1) count = findOccurrence(garbage[j], 'P');
                if (i == 2) count = findOccurrence(garbage[j], 'G');
                if (count) result.push(count);
                count ? travelPath.push(1) : travelPath.push(0)
                j++;
            }
            let findLastIndex = travelPath.lastIndexOf(1) - 1
            while (findLastIndex >= 0) {
                result.push(travel[findLastIndex]);
                findLastIndex--;
            }
        }
        return result.reduce((a, b) => a + b, 0)
    }

}


// O(log n)
const findOccurrence = (string, letter) => {
    let i = 0;
    let j = string.length - 1;
    let count = 0
    while (i <= j) {
        if (string[i] == letter) {
            count++;
        }
        if (string[j] == letter && i !== j) {
            count++;
        }
        i++;
        j--;
    }
    return count;
}

const data = new Solution().fn(["G", "P", "GP", "GG"], [2, 4, 3]);
console.log(data);

// Observation:
// vocabulary: assortment
// input: 2 <= garbage.length <= 105, garbage[i] consists of only the letters 'M', 'P', and 'G'.


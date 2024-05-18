// https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/

class Solution {

    // topic: Array, string, Prefix sum
    fn(garbage, travel) {
        let result = [];
        // for (let i = 0; i < 3; i++) {
        //     let j = 0;
        //     let travelPath = [];
        //     while (j < garbage.length) {
        //         let count
        //         if (i == 0) count = findOccurrence(garbage[j], 'M');
        //         if (i == 1) count = findOccurrence(garbage[j], 'P');
        //         if (i == 2) count = findOccurrence(garbage[j], 'G');
        //         if (count) result.push(count);
        //         count ? travelPath.push(1) : travelPath.push(0)
        //         j++;
        //     }
        //     let findLastIndex = travelPath.lastIndexOf(1) - 1
        //     while (findLastIndex >= 0) {
        //         result.push(travel[findLastIndex]);
        //         findLastIndex--;
        //     }
        // }

        // Alternate:
        for (let i = 0; i < 3; i++) {
            let j = garbage.length - 1;
            let pathIndex = 0
            while (j >= 0) {
                if (i === 0) result.push(garbage[j].length);
                if (i === 0 && !pathIndex && garbage[j].includes('M')) pathIndex = j
                if (i === 1 && !pathIndex && garbage[j].includes('G')) pathIndex = j
                if (i === 2 && !pathIndex && garbage[j].includes('P')) pathIndex = j
                j--;
            }
            while (pathIndex > 0) {
                result.push(travel[pathIndex - 1])
                pathIndex--
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

const data = new Solution().fn(["MMM", "PGM", "GP", "M", "M", "M"], [3, 10, 1, 2, 3]);
console.log(data);

// Observation:
// vocabulary: assortment
// input: 2 <= garbage.length <= 105, garbage[i] consists of only the letters 'M', 'P', and 'G'.


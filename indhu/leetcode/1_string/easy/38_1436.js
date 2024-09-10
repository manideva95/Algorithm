// https://leetcode.com/problems/destination-city/description/

class Solution {

    // topic:array, hash table, string
    fn(paths) {
        // let obj = new Set();
        // let obj2 = new Set();
        // paths.forEach(element => {
        //     obj.add(element[0], element[0]);
        //     obj2.add(element[1], element[1])
        // });
        // for (let c of obj2) {
        //     if (![...obj.values()].includes(c)) {
        //         return c
        //     }
        // }

        // Alternate
        const startingCities = new Set();

        for (const path of paths) {
            startingCities.add(path[0]);
        }

        for (const path of paths) {
            if (!startingCities.has(path[1])) {
                return path[1];
            }
        }
    }

}

const data = new Solution().fn([["London", "New York"], ["Lima", "Sao Paulo"], ["New York", "Lima"]]);
console.log(data);

// Observation:
// input: exactly one destination city.
// Methods: has, add -> time complexity : 0(1)
// output: o(2n)


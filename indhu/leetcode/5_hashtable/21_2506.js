// https://leetcode.com/problems/count-pairs-of-similar-strings/

/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function (words) {
    // let count = 0;
    // words.forEach((word, i) => {
    //     let arr = word.split('');
    //     let set = new Set(arr);
    //     let j = i + 1;
    //     while (j < words.length) {
    //         let set2 = new Set(words[j].split(''));
    //         if (set.size == set2.size && arr.every(el => set2.has(el))) count++;
    //         j++;
    //     }
    // });
    // return count;

    // Alternate
    words = words.map((word) => [...new Set(word).values()].sort().join(""))
    console.log(words)
    let pairs = 0
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (words[i] == words[j]) {
                pairs++
            }
        }
    }
    return pairs
}

const result = similarPairs(["aba", "aabb", "abcd", "bac", "aabc"])
console.log(result);

// Observation:
// output Time Complexity : O(n)
// https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/description/

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function (n, k) {
    let arr = [];
    const traversal = (s, initial, initialIndex) => {
        let letter = ['a', 'b', 'c'];
        if (!s) {
            s += initial
            letter.splice(initialIndex, 1)
        } else {
            let index = letter.indexOf(s[s.length - 1]);
            letter.splice(index, 1)
        }
        if (s.length === n) return arr.push(s);
        for (let l of letter) {
            traversal(s + l);
        }
    }
    let j = 0;
    for (let i of ['a', 'b', 'c']) {
        traversal('', i, j);
        j++
    }
    return arr[k - 1] || ''
};

const result = getHappyString(1, 1)
console.log(result);
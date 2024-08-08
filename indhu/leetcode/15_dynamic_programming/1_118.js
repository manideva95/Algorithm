// https://leetcode.com/problems/pascals-triangle/description/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows === 1) return [[1]]
    let arr = [[1], [1, 1]];

    for (let i = 1; i < numRows - 1; i++) {
        let parcel = [], j = 1, prev = arr[arr.length - 1]
        parcel.push(1)
        while (j < prev.length) {
            parcel.push(prev[j - 1] + prev[j]);
            j++;
        }
        parcel.push(1);
        arr.push(parcel);
    }
    return arr
};

const result = generate(8)
console.log(result);
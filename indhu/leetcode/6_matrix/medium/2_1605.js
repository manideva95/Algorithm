// https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums/description/

var restoreMatrix = function (rowSum, colSum) {
    // let result = new Array(rowSum.length).fill().map(() => Array(colSum.length).fill(0));
    // for (let i = 0; i < result.length; i++) {
    //     for (let j = 0; j < result[0].length; j++) {
    //         console.log(rowSum[i], colSum[j], result)
    //         if (rowSum[i] > colSum[j]) {
    //             result[i][j] += colSum[j];
    //             rowSum[i] = rowSum[i] - colSum[j];
    //             colSum[j] = 0;
    //         } else {
    //             result[i][j] += rowSum[i];
    //             colSum[j] = colSum[j] - rowSum[i];
    //             rowSum[i] = 0;
    //         }
    //     }
    // }
    // return result;

    // Alternate:

    const m = rowSum.length, n = colSum.length;
    const result = Array.from({ length: m }, () => new Array(n).fill(0));

    let i = 0, j = 0;

    while (i < m && j < n) {
        const val = Math.min(rowSum[i], colSum[j]);
        result[i][j] = val;
        rowSum[i] -= val;
        colSum[j] -= val;

        if (rowSum[i] === 0) i++;
        if (colSum[j] === 0) j++;
    }

    return result;
};

const result = restoreMatrix([3, 8], [4, 7]);
console.log(result)
// https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/description/

// this problem is little bit medium if you find tough skip it

var maxWidthOfVerticalArea = function (points) {
    let sortedPointsOfXaxis = points.sort((a, b) => a[0] - b[0])
    let result = 0
    for (let i = 1; i < sortedPointsOfXaxis.length - 1; i++) {
        result = Math.max(sortedPointsOfXaxis[i][0] - sortedPointsOfXaxis[i - 1][0], result)
    }
    return result
};

console.log(
    maxWidthOfVerticalArea([[2, 4], [10, 10], [6, 8], [6, 8], [6, 10], [8, 6], [5, 3]])
)

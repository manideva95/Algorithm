// https://leetcode.com/problems/interval-list-intersections/description/

/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
    const result = []
    let i = 0, j = 0
    while (i < firstList.length && j < secondList.length) {
        let start = Math.max(firstList[i][0], secondList[j][0]);
        let end = Math.min(secondList[j][1], firstList[i][1]);

        if (start <= end) result.push([start, end]);

        if (firstList[i][1] < secondList[j][1])
            i++
        else if (firstList[i][1] > secondList[j][1])
            j++
        else {
            i++;
            j++;
        }
    }
    return result;
};


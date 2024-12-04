// https://leetcode.com/problems/find-all-groups-of-farmland/description/

/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function (land) {

    const ans = [], rows = land.length, cols = land[0].length

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (!land[i][j]) {
                continue
            }

            if (!land[i][j - 1] && !land[i - 1]?.[j]) {
                const farm = [i, j]
                let x = i, y = j
                while (land[x][y + 1] && land[x + 1]?.[y]) {
                    x++
                    y++
                }
                while (land[x][y + 1]) {
                    y++
                }
                while (land[x + 1]?.[y]) {
                    x++
                }
                farm.push(x, y)
                ans.push(farm)
            }
        }
    }

    return ans
    // let result = []
    // for (let i = 0; i < land.length; i++) {
    //     for (let j = 0; j < land[0].length; j++) {
    //         if (land[i][j] === 1) {
    //             let group = [i, j, i, j];
    //             check(land, i, j,group);
    //             result.push(group)
    //         }
    //     }
    // }
    // return result;
};

const check = (land, i, j, group) => {
    if (i >= land.length || j >= land[0].length || land[i][j] === 0) {
        return false
    }
    land[i][j] = 0;
    group[2] = Math.max(group[2], i);
    group[3] = Math.max(group[3], j);
    check(land, i + 1, j, group);
    check(land, i, j + 1, group);
}

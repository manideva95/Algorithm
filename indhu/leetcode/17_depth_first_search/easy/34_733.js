// https://leetcode.com/problems/flood-fill/description/

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
    const startVal = image[sr][sc];
    const visited = new Set();
    const directionLoop = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    const traversal = (sr, sc) => {
        image[sr][sc] = color;
        visited.add(`${sr}${sc}`);

        for (let [r, c] of directionLoop) {
            if (image[sr + r] !== undefined && image[sr + r][sc + c] === startVal && !visited.has(`${sr + r}${sc + c}`)) {
                image[sr + r][sc + c] = color;
                traversal(sr + r, sc + c);
            }
        }
    }

    traversal(sr, sc);
    return image
};
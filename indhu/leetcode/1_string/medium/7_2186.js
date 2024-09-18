// https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii/

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
    const mapS = new Map()
    let result = 0;
    for (let c of s) mapS.set(c, (mapS.get(c) || 0) + 1);
    console.log(mapS);

    for (let c of t) {
        let val = mapS.get(c)
        if (val) mapS.set(c, --val);
        else result++
    }
    mapS.forEach((v) => result += v);
    return result

};

const result = minSteps('coding', 'coching')
console.log(result);
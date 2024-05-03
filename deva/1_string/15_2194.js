// https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/description/

/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function (s) {
    const [start, end] = s.split(":")
    console.log(start, end)
    let startIndex = start.charCodeAt(0)
    let endIndex = end.charCodeAt(0)
    let startValue = Number(start.slice(1))
    let endValue = Number(end.slice(1))
    console.log(startIndex, endIndex)
    console.log(startValue, endValue)
    let result = []
    for (let i = startIndex; i <= endIndex; i++) {
      for (let j = startValue; j <= endValue; j++) {
        result.push(`${String.fromCharCode(i)+j}`)
      }
    }
    return result
  };
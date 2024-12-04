// https://leetcode.com/problems/convert-1d-array-into-2d-array/

/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
    //   if((m*n) !== original.length) return [];
    // let result= [];
    // let row=[]; 
    // original.forEach(element => {
    //   row.push(element);
    //   if( row.length === n){
    //     result.push(row)
    //     row = [];
    //   }
    // });
    // return result; 
    if (original.length !== m * n) return [];
    let answer = new Array(m);
    for (let i = 0; i < m; i++) {
        answer[i] = original.slice(i * n, i * n + n);
    }
    return answer;
};
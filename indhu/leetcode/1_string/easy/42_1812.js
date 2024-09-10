// https://leetcode.com/problems/determine-color-of-a-chessboard-square/description/

class Solution {

    // topic: string, Math
    fn(coordinates) {
        let indexOfAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].indexOf(coordinates[0]) + 1
        let indexOfInteger = ['1', '2', '3', '4', '5', '6', '7', '8'].indexOf(coordinates[1]) + 1
        if ((indexOfAlpha % 2 == 0 && indexOfInteger % 2 !== 0) || (indexOfAlpha % 2 !== 0 && indexOfInteger % 2 == 0)) {
            return true
        }
        return false
    }

}

const data = new Solution().fn('b1');
console.log(data);

// Observation:
// Methods: indexOf() [time complexity : O(n)]
// output Time Complexity : O(2n)


// Alternate
//     if (((coordinates[0] == 'a' || coordinates[0] == 'c' ||
// coordinates[0] == 'e' || coordinates[0] == 'g') &&
// !(((int)coordinates[1]) & 1)) ||
// ((coordinates[0] == 'b' || coordinates[0] == 'd' ||
//  coordinates[0] == 'f' || coordinates[0] == 'h') &&
// (((int)coordinates[1]) & 1))) {
// return true;
// }
// return false;


// const file = coordinates.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
// const rank = parseInt(coordinates[1]);
// return (file + rank) % 2 !== 0;
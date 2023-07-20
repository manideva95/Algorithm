// https://exercism.org/tracks/javascript/exercises/scrabble-score/edit

// Instructions
// Given a word, compute the Scrabble score for that word.

// Letter Values
// You'll need these:

// Letter                           Value
// A, E, I, O, U, L, N, R, S, T       1
// D, G                               2
// B, C, M, P                         3
// F, H, V, W, Y                      4
// K                                  5
// J, X                               8
// Q, Z                               10
// Examples
// "cabbage" should be scored as worth 14 points:

// 3 points for C
// 1 point for A, twice
// 3 points for B, twice
// 2 points for G
// 1 point for E
// And to total:

// 3 + 2*1 + 2*3 + 2 + 1
// = 3 + 2 + 6 + 3
// = 5 + 9
// = 14
// Extensions
// You can play a double or a triple letter.
// You can play a double or a triple word.


const one = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T']
const two = ['D', 'G']
const three = ['B', 'C', 'M', 'P']
const four = ['F', 'H', 'V', 'W', 'Y']
const five = ['K']
const eight = ['J', 'X']
const ten = ['Q', 'Z']
const score = (word) => {
    let result = 0
    for (let index = 0; index < word.length; index++) {
        const letter = word[index].toUpperCase()
        if (one.includes(letter)) {
            result += 1
        } else if (two.includes(letter)) {
            result += 2
        } else if (three.includes(letter)) {
            result += 3
        } else if (four.includes(letter)) {
            result += 4
        } else if (five.includes(letter)) {
            result += 5
        } else if (eight.includes(letter)) {
            result += 8
        } else if (ten.includes(letter)) {
            result += 10
        }
    }
    return console.log(result)
};

score('aa')
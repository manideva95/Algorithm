// https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/description/

/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
    let count = 0
    seats = seats.sort((a, b) => b - a)
    students = students.sort((a, b) => b - a)
    seats.forEach((s, i) =>
        count = count + Math.abs(s - students[i]))

    return count
};

const result = minMovesToSeat([2, 2, 6, 6], [1, 3, 2, 6])
console.log(result);

// Observation:
// output Time Complexity : O(n)
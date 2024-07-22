// https://leetcode.com/problems/time-needed-to-buy-tickets/

/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
    // let count = 0;

    // for (let i = 0; i < tickets.length; i++) {
    //     if (tickets[i] >= tickets[k] && i <= k) count += tickets[k];
    //     else if (tickets[i] >= tickets[k] && i > k) count += tickets[k] - 1;
    //     else if (tickets[i] < tickets[k]) count += tickets[i]
    // }
    // return count

    let total = 0;

    for (let i = 0; i < tickets.length; i++) {
        if (i <= k) {
            total = total + Math.min(tickets[i], tickets[k]);
        } else {
            total = total + Math.min(tickets[i], tickets[k] - 1)
        }
    }
    return total
};

const result = timeRequiredToBuy([5, 8, 3, 3, 2, 2, 2], 2)
console.log(result);

// Observation:
// output Time Complexity : O(n)


// https://leetcode.com/problems/count-asterisks/description/

var countAsterisks = function (s) {
    let slashCount = 0
    let asteriskCount = 0
    for (let letter of s) {
        if (letter == "|") {
            slashCount++
        }
        // if slashcount is even number then counting the asterisk
        if(((slashCount % 2) == 0) && letter == "*"){
            asteriskCount++
        }
    }
    return asteriskCount;
};
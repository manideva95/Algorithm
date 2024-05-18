let n = -1
Math.max(0, n); // to get positive numbers
Math.min(0, n) //to get negative numbers

// to get number of char occurrence in a string
const findOccurrence = (string, letter) => {
    let i = 0;
    let j = string.length - 1;
    let count = 0
    while (i <= j) {
        if (string[i] == letter) {
            count++;
        }
        if (string[j] == letter && i !== j) {
            count++;
        }
        i++;
        j--;
    }
    return count;
}
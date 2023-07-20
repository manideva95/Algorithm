let finalResult = []
function factorial(n) {
    //base case
    if (n == 0 || n == 1) {
        return finalResult.push(1);
        //recursive case
    } else {
        return finalResult.push(factorial(n - 1));
    }
}
let n = 4;
answer = factorial(n)
console.log(finalResult);
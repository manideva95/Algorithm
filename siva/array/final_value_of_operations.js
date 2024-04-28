var finalValueAfterOperations = function (operations) {
  let result = 0;
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] == "--X" || operations[i] == "X--") {
      result--;
    } else {
      result++;
    }
  }
  return result;
};

let value = finalValueAfterOperations(["--X", "X++", "X++"]);

console.log(value);

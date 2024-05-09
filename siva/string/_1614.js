// Maximum Nesting Depth of the Parentheses
var maxDepth = function (s) {
  let maxDepth = 0;
  let currDepth = 0;

  for (const word of s) {
    if (word == "(") {
      currDepth++;
      maxDepth = Math.max(maxDepth, currDepth);
    } else if (word === ")") {
      currDepth--;
    }
  }
  return maxDepth;
};

maxDepth("(1+(2*3)+((8)/4))+1");

let getConcatenation = function (nums) {
  return [...nums, ...nums];
};

let result = getConcatenation([1, 2, 1]);
console.log(result);

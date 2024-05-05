var interpret = function (command) {
  let result = command.replaceAll("()", "o");
  result = result.replaceAll("(al)", "al");
  return result;
};
let value = interpret("G()(al)");

console.log(value);

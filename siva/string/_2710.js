var removeTrailingZeros = function (num) {
  if (num[num.length - 1] != 0) {
    return num;
  }
  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] == 0) {
      continue;
    } else {
      return num.slice(0, i + 1);
    }
  }
};

//regex expression

function removeTrailingZeros(numStr) {
  return numStr.replace(/(0+)$/, "");
}

removeTrailingZeros("51230100");

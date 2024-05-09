var restoreString = function (s, indices) {
  let result = [];
  for (let i = 0; i < indices.length; i++) {
    console.log(indices[i]);
    console.log(s[i]);
    result[indices[i]] = s[i];
  }
  console.log(result);
  return result.join("");
};

restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]);

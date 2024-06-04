var countKeyChanges = function (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    console.log(s[i - 1]);
    if (s[i - 1]) {
      if (s[i - 1].toLowerCase() !== s[i].toLowerCase()) {
        count++;
      }
    }
  }
  console.log(count);
  return count;
};
countKeyChanges("aAbBcC");

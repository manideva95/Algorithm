var countConsistentStrings = function (allowed, words) {
  console.log(words);
  let res = 0;
  let set = new Set(allowed);
  console.log(set);
  for (const word of words) {
    if (word.split("").every((val) => set.has(val))) {
      res++;
    }
  }
  console.log(res);
};

countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]);

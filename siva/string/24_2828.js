var isAcronym = function (words, s) {
  let acronym = "";
  for (const word of words) {
    acronym = acronym + word.slice(0, 1);
  }
  return s == acronym;
};

isAcronym(["alice", "bob", "charlie"], "abc");

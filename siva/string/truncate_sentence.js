var truncateSentence = function (s, k) {
  return s.split(" ").splice(0, k).join(" ");
};
truncateSentence("Hello how are you Contestant", 4);

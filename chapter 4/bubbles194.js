var highScore = 0;
var scores = [
  60,
  50,
  60,
  58,
  54,
  54,
  58,
  50,
  52,
  54,
  48,
  69,
  34,
  55,
  51,
  52,
  44,
  51,
  69,
  64,
  66,
  55,
  52,
  61,
  46,
  31,
  57,
  52,
  44,
  18,
  41,
  53,
  55,
  61,
  51,
  44
];
var costs = [
  0.25,
  0.27,
  0.25,
  0.25,
  0.25,
  0.25,
  0.33,
  0.31,
  0.25,
  0.29,
  0.27,
  0.22,
  0.31,
  0.25,
  0.25,
  0.33,
  0.21,
  0.25,
  0.25,
  0.25,
  0.28,
  0.25,
  0.24,
  0.22,
  0.2,
  0.25,
  0.3,
  0.25,
  0.24,
  0.25,
  0.25,
  0.25,
  0.27,
  0.25,
  0.26,
  0.29
];
function getMostConstSolution(scores, costs, highScore) {
  var cost = 100;
  var index;
  for (i = 0; i < scores.length; i++) {
    if (scores[i] == highScore) {
      if (cost > costs[i]) {
        index = i;
        cost = costs[i];
      }
    }
  }
  return index;
}
var mastCostEffective = getMostConstSolution(scores, costs, highScore);
console.log(
  "Bubble solution" + mastCostEffective + " is the most cost effective"
);

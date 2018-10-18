function arraySum(array) {
  return array.reduce((a,b)=>Number(a)+Number(b), 0);
}

function nonUniqueElements(data) {
  const map = new Map();
  data.forEach(a => map.set(a, (map.get(a) || 0) + 1));
  return data.filter(a => map.get(a) > 1);
}

function longRepeat(line) {
  const letters = line.split('');
  const uniqueLetters = letters.filter((elem, pos, arr) => {
    return arr.indexOf(elem) == pos;
  });
  const nbLetters = uniqueLetters.map((l) => (line.split(l).length - 1));
  return Math.max.apply(null, nbLetters);
}

module.exports = {
  nonUniqueElements,
  longRepeat,
  arraySum,
};

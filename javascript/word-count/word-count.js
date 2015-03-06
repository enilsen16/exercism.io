var words = function (phrase) {
  var arrayOfStrings = phrase.split(/\s+/);
  var countOfWords = {};
  arrayOfStrings.forEach(function (element) {
    countOfWords.hasOwnProperty(element) ? countOfWords[element] += 1 : countOfWords[element] = 1;
  });
    return countOfWords;
};
module.exports = words;

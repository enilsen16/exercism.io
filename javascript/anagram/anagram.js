var inputWord, originalWord;
var anagram = function(word) {
  originalWord = word;
  inputWord = lowerCaseAndSorted(word);
  return anagram;
};

anagram.matches = function(words) {
  arrayOfMatches = [];
  words = (typeof words === 'object') ? words : Array.prototype.slice.apply(arguments);
  words.forEach(function(element) {
    if (lowerCaseAndSorted(element) === inputWord &&
    element.toLowerCase() !== originalWord.toLowerCase()) {
      arrayOfMatches.push(element);
    }
  });
  return arrayOfMatches;
};

function lowerCaseAndSorted(word) {
  return word.toLowerCase().split("").sort().join("");
}


module.exports = anagram;

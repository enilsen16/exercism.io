var hamming = {};

hamming.compute = function(string1, string2) {
  var count = 0;
  if (string1.length === string2.length) {
    for(var i = 0; i < string1.length; i++) {
      if (string1.charAt(i) !== string2.charAt(i)) {
        count += 1;
      }
    }
  } else {
    throw 'DNA strands must be of equal length.';
  }
  return count;
};


module.exports = hamming;

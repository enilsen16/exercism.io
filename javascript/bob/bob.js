var Bob = function() {};

Bob.prototype.hey = function(phrase) {
  if (phrase === phrase.toUpperCase() && /[A-Z]+/.test(phrase)) {
    return 'Woah, chill out!';
  } else if (phrase.endsWith("?")) {
    return 'Sure.';
  } else if (/^\s+/.test(phrase) || phrase === '') {
    return 'Fine. Be that way!';
  } else {
    return 'Whatever.';
  }
};

module.exports = Bob;

var dnaStrand;
var dna = function(strand) {
  dnaStrand = strand || "";
  if (/[^ATCG]/.test(dnaStrand)) { throw new Error(); }
  return dna;
};

dna.count = function (check) {
  var total = 0;
  if (dnaStrand !== undefined){
    for (var i = 0; i < dnaStrand.length; i++) {
      if (dnaStrand[i] === check) {
        total += 1;
      }
    }
  }
  return total;
};

dna.histogram = function() {
  var obj = {A: 0, T: 0, C: 0, G: 0};
  if (dnaStrand !== undefined){
    for (var i = 0; i < dnaStrand.length; i++) {
      if (obj[dnaStrand[i]] >= 0) { obj[dnaStrand[i]] += 1; }
    }
  }
  return obj;
};


module.exports = dna;

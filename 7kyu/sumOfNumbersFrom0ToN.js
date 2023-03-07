var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    if (count === 0) return '0=0';
    if (count < 0) return `${count}<0`;
    const arr = [];
    for (i = 0; i <= count; i++) {
      arr.push(i);
    }
    const sum = arr.reduce((sum, num) => sum + num, 0);
    return arr.join('+') + ` = ${sum}`
  };

  return SequenceSum;

})();
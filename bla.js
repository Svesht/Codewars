// function SequenceSum() {}

// SequenceSum.bruv = function(count) {
//     return count;
// }

// console.log('Result is: ', SequenceSum.bruv(5));

const SequenceClass = (function() {
    function SequenceSum() {}

    SequenceSum.showSequence = function(count) {
        return count;
    }

    return SequenceSum;
})();

console.log('Result is: ', SequenceClass.showSequence(1));

const SequenceClassConstructor = (function() {
    const SequenceSum = {
        showSequence: function(count) {
            return count;
        }
    }

    return SequenceSum;
})();

console.log('Result2 is: ', SequenceClassConstructor.showSequence(2));

function SequenceClassEs5() {
    this.showSequence = function(count) {
        return count;
    };
}

const es5SequenceClass = new SequenceClassEs5();

console.log('Result3 is: ', SequenceClassEs5.showSequence(3));
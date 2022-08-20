function sum(numbers) {
    "use strict";
    return numbers.reduce((sum, current) => sum + current, 0);
}
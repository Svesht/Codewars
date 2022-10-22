//Original solution

function stray(numbers) {
    numbers.sort((a,z) => a - z);
    return numbers[0] !== numbers[1] ? numbers[0] : numbers[numbers.length - 1];
}
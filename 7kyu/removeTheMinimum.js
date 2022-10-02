//Original solution

function removeSmallest(numbers) {
    const min = Math.min(...numbers)
    const result = [...numbers];
    result.splice(numbers.indexOf(min), 1);
    return result;
}
function createPhoneNumber(numbers) {
    let template = '(xxx) xxx-xxxx';
    for (i = 0; i < 10; i++) {
        template = template.replace('x', numbers[i]);
    }
    return template;
}

// function createPhoneNumber(numbers) {
//     numbers.splice(0, 0, '(');
//     numbers.splice(4, 0, ') ');
//     numbers.splice(8, 0, '-');
//     return numbers.join('');;
// }
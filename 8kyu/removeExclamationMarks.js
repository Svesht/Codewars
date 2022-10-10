//Original solution, specifically without regex

const removeExclamationMarks = s => s.split('!').join('');

//Regex solution

// const removeExclamationMarks = s => s.replace(/!/g, '');

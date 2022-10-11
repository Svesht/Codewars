//Original solution

function formatDuration (seconds) {
    if (seconds === 0) return 'now';
    const time = {year: 0, day: 0, hour: 0, minute: 0, second: 0}; //object counting each unit
    time.year = Math.floor(seconds / (3600*24*365));
    seconds -= time.year * 3600*24*365;
    time.day = Math.floor(seconds / (3600*24));
    seconds -= time.day * 3600*24;
    time.hour = Math.floor(seconds / 3600);
    seconds -= time.hour * 3600;
    time.minute = Math.floor(seconds / 60);
    seconds -= time.minute * 60;
    time.second = seconds;
  
    const arr = []; //array with the string for each unit if nonzero;
    for (let unit in time) { 
        if (time[unit]) {
            arr.push(time[unit] + ' ' + unit + (time[unit] > 1 ? 's' : ''));
        }
    }
    let last = '';
    if (arr.length > 1) last = ' and ' + arr.pop(); //if more than one unit, last one gets an 'and'
    return arr.join(', ') + last;
}

//refactored with loop and modulus

function formatDuration (seconds) {
    if (seconds === 0) return 'now';

    const time = {year: 365*24*3600, day: 24*3600, hour: 3600, minute: 60, second: 1};
    const arr = [];
    for (let unit in time) {
        if (seconds >= time[unit]) {
            const amount = Math.floor(seconds / time[unit]);
            arr.push(amount + ' ' + unit + (amount > 1 ? 's' : ''));
            seconds = seconds % time[unit];
        }
    }
    const last = (arr.length > 1) ? ' and ' + arr.pop() : ''; //if more than one unit, add 'and' to last one
    return arr.join(', ') + last;
}
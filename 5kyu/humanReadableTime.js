//Cleaner solution using modulus and without template literals

function humanReadable(seconds) {
    const hours = parseInt(seconds / 3600);
    const minutes = parseInt(seconds / 60 % 60);
    seconds = seconds % 60;

    const pad = (num) => num > 9 ? num : '0' + num;
    return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
}

//Original solution. A bit messy.

function humanReadable(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds - (hours * 3600)) / 60);
    seconds = seconds - (hours * 3600) - (minutes * 60);
    return `${format(hours)}:${format(minutes)}:${format(seconds)}`;
}

function format(time) {
    return time > 9 ? time : '0' + time;
}
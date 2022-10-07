//Original solution

function updateLight(current) {
    const nextColor = {green: 'yellow', yellow: 'red', red: 'green'};
    return nextColor[current];
}
//Original solution

function evaporator(content, evap_per_day, threshold) {
    let day = 0;
    const minContent = content * (threshold / 100)
    
    while (content > minContent) {
        day++;
        content -= content * (evap_per_day / 100);
    }
    return day;
}

//Cleaner version using percentages

function evaporator(content, evap_per_day, threshold) {
    let day = 0;
    let gas = 100;
    
    while (gas > threshold) {
        day++;
        gas -=  gas * (evap_per_day / 100);
    }
    return day;
}
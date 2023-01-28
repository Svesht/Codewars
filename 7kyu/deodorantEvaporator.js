function evaporator(content, evap_per_day, threshold) {
    let day = 0;
    const minContent = content * (threshold / 100)
    
    while (content > minContent) {
        day++;
        content -= content * (evap_per_day / 100);
    }
    return day;
}
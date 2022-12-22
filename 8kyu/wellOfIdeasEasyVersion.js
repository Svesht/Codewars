//Original solution

function well(ideas) {
    let good = 0;
    for (const idea of ideas) {
        if (idea === 'good') good++;
    }
    if (good > 2) return "I smell a series!";
    if (good > 0) return "Publish!";
    return "Fail!";
}

//More compact solution using filter

function well(x) {
    const good = x.filter(idea => idea === 'good').length;
    if (good > 2) return "I smell a series!";
    if (good > 0) return "Publish!";
    return "Fail!";
}
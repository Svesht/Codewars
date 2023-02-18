function capitalize(s){
    const even = s.split('').map((e, i) => i % 2 === 0 ? e.toUpperCase() : e);
    const uneven = s.split('').map((e, i) => i % 2 !== 0 ? e.toUpperCase() : e);
    return [even.join(''), uneven.join('')];
};
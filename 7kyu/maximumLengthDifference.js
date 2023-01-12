//First attempt, but gave up because it is not readable

function mxdiflg(a1, a2) {
    console.log(a1);
    console.log(a2);
    if (!a1 || !a2) return -1;
    const min1 = a1.sort((a, b) => a.length - b.length)[0].length;
    const min2 = a2.sort((a, b) => a.length - b.length)[0].length;
    const max1 = a1.sort((a, b) => b.length - a.length)[0].length;
    const max2 = a2.sort((a, b) => b.length - a.length)[0].length;
    return Math.max(Math.abs(max2 - min1), Math.abs(max1 - min2));
}

//Simpler version

function mxdiflg(a1, a2) {
    if (!a1.length || !a2.length) return -1;
    let maxDiff = 0;
    let diff;
    for (i = 0; i < a1.length; i++) {
        for (j = 0; j < a2.length; j++) {
            diff = Math.abs(a1[i].length - a2[j].length);
            if (diff > maxDiff) maxDiff = diff;
        }
    }
    return maxDiff;
}

//Alternate version using sort, somewhat like the first attempt

function mxdiflg(a1, a2) {
    if (!a1.length || !a2.length) return -1;
    const l1 = a1.map(s => s.length).sort((a, z) => a - z);
    const l2 = a2.map(s => s.length).sort((a, z) => a - z);
    return Math.max(l1[l1.length - 1] - l2[0], l2[l2.length - 1] - l1[0]);
}
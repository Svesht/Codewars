var recoverSecret = function (triplets) {
    const strArr = [];
    triplets.forEach(triplet => {
        triplet.forEach(letter => {
            if (!strArr.includes(letter)) {
                strArr.push(letter);
            }
        })
    });

    let edited = true

    while (edited === true) {
        edited = false;

        triplets.forEach(triplet => {
            const index0 = strArr.indexOf(triplet[0]);
            const index1 = strArr.indexOf(triplet[1]);

            if (index0 > index1) {
                edited = true;
                const letter0 = strArr[index0];
                strArr[index0] = strArr[index1];
                strArr[index1] = letter0;
            };

        });

        triplets.forEach(triplet => {
            const index1 = strArr.indexOf(triplet[1]);
            const index2 = strArr.indexOf(triplet[2]);

            if (index1 > index2) {
                edited = true;
                const letter1 = strArr[index1];
                strArr[index1] = strArr[index2];
                strArr[index2] = letter1;
            };

        });
    }

    return strArr.join('');
}
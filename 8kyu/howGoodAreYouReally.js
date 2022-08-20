function betterThanAverage(classPoints, yourPoints) {
    let sum = 0;
    //Iterate through array and add points to the sum
    for (i = 0; i < classPoints.length; i++) {
        sum += classPoints[i];
    }

    //Add your points, then divide the sum through the amount of students including you
    sum += yourPoints;
    const classAverage = sum / (classPoints.length + 1);
    //Return true if you scored higher than the average
    return (yourPoints > classAverage);
}
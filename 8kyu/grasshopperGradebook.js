//Original solution

function getGrade (s1, s2, s3) {
    const avg = (s1 + s2 + s3) / 3;
    let grade = 'F';
    if (avg >= 60) grade = 'D';
    if (avg >= 70) grade = 'C';
    if (avg >= 80) grade = 'B';
    if (avg >= 90) grade = 'A';
    return grade;
}
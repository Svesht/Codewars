function chromosomeCheck(sperm) {
  let gender = sperm === 'XY' ? 'son' : 'daughter';
  return `Congratulations! You're going to have a ${gender}.`;
}
function replace(s){
  const vowels = 'aeiouAEIOU';
  return s.split('')
    .map(letter => vowels.includes(letter) ? '!' : letter)
    .join('');
}
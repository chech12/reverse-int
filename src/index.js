module.exports = function reverse (n) {
  let answer = '';
  n = String(n);
  for (let i = n.length - 1; i >= 0; i--) {
    if (n[i] !== '-') answer += n[i];
  }
  return answer;
}

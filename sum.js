function Sum(s1, s2) {
  if (s1 == 0) return Sum([].slice.call(arguments, 1))
  if (arguments.length < 3) {
    if (s2 == 0) return s1;
    return [s1, '+', s2];
  } else {
    return Sum(s1, Sum(...([].slice.call(arguments, 1))))
  }
}
function addend(s) {return car(s)}
function augend(s) {return cdr(s, 2)}
function isSum(s) {return cdr(s) === '+'}

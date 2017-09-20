function Product(m1, m2) {
  if (m1 == 0 || m2 == 0) return 0;
  if (arguments.length < 3) {
    if (m1 === 1) return m2;
    if (m2 === 1) return m1;
    return [m1, '*', m2];
  } else {
    return Product(m1, Product(...([].slice.call(arguments, 1))))
  }
}
function multiplier(m) {return car(m)}
function multiplicand(m) {return cdr(m, 2)}
function isProduct(m) {return cdr(m) === '*'}

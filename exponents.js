function Exponent(base, power) {
  if (base === 0) return 0;
  if (power === 0) return 1;
  return ['**', base, power]
}
function isExponent(e) {return car(e) === '**';}
function base(e) {return cdr(e);}
function power(e) {return cdr(e, 2);}

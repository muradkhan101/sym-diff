// exp is expression and d is the variable the derivative is taken in respect to
function derivative(exp, d) {
  if (isNumber(exp)) return 0;
  if (exp === d) return 1;
  if (isSum(exp)) return (Sum(derivative(addend(exp), d), derivative(augend(exp), d)))
  if (isProduct(exp)) return (Sum (
                                Product( multiplicand(exp), derivative(multiplier(exp). d) ),
                                Product( multiplier(exp), derivative(multiplicand(exp), d))
                              ));
  if (isExponent) return (Product (
                            Product( power(exp), Exponent(base(exp), power(exp) - 1)),
                            derivative(base(exp), 'x')
                          ))
}

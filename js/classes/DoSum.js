class DoSum {
  static whichSum(num1, num2, sign) {
    // debugger;
    if (sign === '+') return DoSum.add(num1, num2);
    if (sign === '-') return DoSum.sub(num1, num2);
    if (sign === 'x') return DoSum.mul(num1, num2);
    if (sign === '/') return DoSum.div(num1, num2);
  }

  static add(num1, num2) {
    return num1 + num2;
  }

  static sub(num1, num2) {
    return num1 - num2;
  }

  static mul(num1, num2) {
    return num1 * num2;
  }

  static div(num1, num2) {
    return num1 / num2;
  }
}

export default DoSum;

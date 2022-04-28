class Helper {
  static formatResult(data) {
    const process = String(data).split('.');
    return (
      new Intl.NumberFormat().format(process[0]) +
      `${process.length === 2 ? '.' + process[1] : ''}`
    );
  }
}

export default Helper;

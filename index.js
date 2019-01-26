const add = (x, y) => x + y;

const mean = numbers => numbers.reduce(add) / numbers.length;

const sample_variance = numbers => {
  const m = mean(numbers);
  return mean(numbers.map(x => (m - x) ** 2));
}

const standard_deviation = numbers => Math.sqrt(sample_variance(numbers));

export {
  add,
  mean,
  sample_variance,
  standard_deviation,
}

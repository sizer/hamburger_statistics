import {
  add,
  mean,
  sample_variance,
  standard_deviation,
} from './index';

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('mean of 1 to 5 is 3', () => {
  expect(mean([1,2,3,4,5])).toBe(3)
});

test('variance of 1 to 4 is 1.25', () => {
  expect(sample_variance([1,2,3,4])).toBe(1.25)
});

test('standard deviation of 1 to 7 is 2', () => {
  expect(standard_deviation([1,2,3,4,5,6,7])).toBe(2)
});

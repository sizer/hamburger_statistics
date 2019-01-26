import {
  add,
  mean,
  sample_variance,
  standard_deviation,
} from './index';

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

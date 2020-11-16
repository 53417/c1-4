import roundingHelper from '../../../weatherForecastWidget/helpers/roundingHelper';

test('rounds first argument to decimal place specified by second argument', () => {
  const float = 9.12351243465;
  const test1 = roundingHelper(float, 2);
  expect(test1).toEqual(9.12);
  const test2 = roundingHelper(float, 3);
  expect(test2).toEqual(9.124);
  const test3 = roundingHelper(float, 4);
  expect(test3).toEqual(9.1235);
});

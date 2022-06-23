// @ts-ignore see https://github.com/jest-community/jest-extended#setup
import * as matchers from "jest-extended";
import distance, { Coordinates } from ".";

expect.extend(matchers);

test("The distance between a point and itself should equal zero", () => {
  // GIVEN
  const A: Coordinates = {
    x: 0,
    y: 0,
  };

  // WHEN
  const actual = distance(A, A);

  // THEN
  const expected: number = 0;
  expect(actual).toEqual(expected);
});

test("Dimension: x (second point)", () => {
  // GIVEN
  const A: Coordinates = {
    x: 0,
    y: 0,
  };
  const B: Coordinates = {
    x: 1,
    y: 0,
  };

  // WHEN
  const actual = distance(A, B);

  // THEN
  const expected: number = 1;
  expect(actual).toEqual(expected);
});

test("Dimension: x (first point)", () => {
  // GIVEN
  const A: Coordinates = {
    x: 1,
    y: 0,
  };
  const B: Coordinates = {
    x: 2,
    y: 0,
  };

  // WHEN
  const actual = distance(A, B);

  // THEN
  const expected: number = 1;
  expect(actual).toEqual(expected);
});

test("Dimension: x; a distance should always be positive", () => {
  // GIVEN
  const A: Coordinates = {
    x: 0,
    y: 0,
  };
  const B: Coordinates = {
    x: -1,
    y: 0,
  };

  // WHEN
  const actual = distance(A, B);

  // THEN
  const expected: number = 1;
  expect(actual).toEqual(expected);
});

test("Dimension: y", () => {
  // GIVEN
  const A: Coordinates = {
    x: 0,
    y: 3,
  };
  const B: Coordinates = {
    x: 0,
    y: 2,
  };

  // WHEN
  const actual = distance(A, B);

  // THEN
  const expected: number = 1;
  expect(actual).toEqual(expected);
});

test("Both dimensions", () => {
  // GIVEN
  const A: Coordinates = {
    x: 0,
    y: 0,
  };
  const B: Coordinates = {
    x: 1,
    y: 1,
  };

  // WHEN
  const actual = distance(A, B);

  // THEN
  const expected: number = 2;
  expect(actual).toEqual(expected);
});

test("[Control]", () => {
  // GIVEN
  const A: Coordinates = {
    x: -1,
    y: 3,
  };
  const B: Coordinates = {
    x: 1,
    y: -4,
  };

  // WHEN
  const actual = distance(A, B);

  // THEN
  const expected: number = 9;
  expect(actual).toEqual(expected);
});

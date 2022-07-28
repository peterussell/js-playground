import sum from "../src/sum";

test("adds 1 + 2 and returns 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 1 + 2 and checks the result isn't 4", () => {
  expect(sum(1, 2)).not.toBe(4);
});

test("adding negative numbers returns undefined", () => {
  expect(sum(-1, 1)).toBeUndefined();
});

test("adding numbers greater than or equal to 100 throws an exception", () => {
  expect(() => sum(100, 101)).toThrow("Values must be smaller than 100.");
});

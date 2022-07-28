import { runTimerSuccess, runTimerFailure } from "../src/timer";

test("Run timer success should return 42", () => {
  return runTimerSuccess()
    .then(data => { expect(data).toBe(42); });
});

test("Run timer failure should return -1", () => {
  return runTimerFailure()
    .catch(data => { expect(data).toBe(-1); });
});

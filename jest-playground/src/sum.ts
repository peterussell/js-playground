const sum = (a: number, b: number): (number | undefined) => {
  if (a < 0 || b < 0) {
    return undefined;
  }

  if (a >= 100 || b >= 100) {
    throw new Error("Values must be smaller than 100.");
  }

  return a+b;
};

export default sum;

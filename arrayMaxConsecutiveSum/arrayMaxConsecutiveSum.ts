function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
  let i: number;
  let result: number[];
  let sumConsec: number = 0;

  inputArray.forEach(element => {
    while (k >= 0) {
      inputArray.map(item => (sumConsec = +inputArray[item]));
    }

    result.push(sumConsec)
  });

  let max = result.reduce(a => {
    return Math.max(a);
  });

  return max;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));

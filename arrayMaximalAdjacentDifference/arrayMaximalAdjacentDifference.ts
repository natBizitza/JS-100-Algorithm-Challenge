function arrayMaximalAdjacentDifference(inputArray: number[]): number {
  let result: number[] = [];
  let max: number = 0;

  for (let i = 0; i < inputArray.length - 1; i++) {
    if (i + 1) {
      result.push(Math.abs(inputArray[i] - inputArray[i + 1]));
    }
  }
  
  return Math.max(...result)
}

console.log(arrayMaximalAdjacentDifference([2, -7, 1, 0]));

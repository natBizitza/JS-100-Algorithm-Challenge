function avoidObstacles(inputArray: number[]): number {
  let sortedArray: number[];

  sortedArray = inputArray.sort((a, b) => a - b);

  let minLength = sortedArray[0] + 1;

  if (minLength * 2 === sortedArray.find(item => item === minLength * 2)) {
    minLength++;
  }

  return minLength;
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));

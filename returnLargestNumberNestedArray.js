// Declarative approach
largestNumber = (arr) => {
  return arr.map(function (group) {
    return group.reduce(function (prev, current) {
      return current > prev ? current : prev;
    });
  });
};

let myArray = [
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
];
console.log(largestNumber(myArray));

// Procedural approach
maxNumber = (arr) => {
  result = [];
  for (let i = 0; i < arr.length; i++) {
    let arrMax = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > arrMax) {
        arrMax = arr[i][j];
      }
    }
    result[i] = arrMax;
  }
  return result;
};
console.log(maxNumber(myArray));

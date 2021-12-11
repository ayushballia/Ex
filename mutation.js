mutation = (arr) => {
  let test = arr[1].toLowerCase();
  let target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
};

let myArray = ["hello", "Helloi"];
// Return true if the string in the first element of the array
// contains all of the letters of the string in the second element
// of the array.
console.log(mutation(myArray));

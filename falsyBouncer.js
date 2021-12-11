bouncer = (arr) => arr.filter(Boolean);

// Remove falsy value from array
console.log(bouncer([7, "ate", "", true, 9]));

removeFalsy = (arr) => {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) newArray.push(arr[i]);
  }
  return newArray;
};
console.log(removeFalsy([7, "ate", "", false, 9]));

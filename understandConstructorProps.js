Dog = (name) => this.name;
joinDogFaternity = (candidate) =>
  candidate.constructor === Dog ? true : false;

console.log(joinDogFaternity);

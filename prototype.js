// Use Prototype to Reduce Duplicate Code
function Dog(name) {
  this.name = name;
}

// Add numLegs property to the Prototype of Dog
Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

console.log(beagle.name);

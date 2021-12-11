// let p = new Promise((resolve, reject) => {
//   let a = 1 + 1;
//   if (a == 2) {
//     resolve("Success");
//   } else {
//     reject("failed");
//   }
// });

// p.then((message) => {
//   console.log(`This is in the then ${message}`);
// }).catch((message) => {
//   console.log(`This is in the ${message}`);
// });

const userLeft = false;
const userWatchingCatMeme = false;

// watchTutorialCallback = (callback, errorCallback) => {
//   if (userLeft) {
//     errorCallback({
//       name: "userLeft",
//       message: ":(",
//     });
//   } else if (userWatchingCatMeme) {
//     errorCallback({
//       name: "User watching cat meme",
//       message: "Ayush < Cat",
//     });
//   } else {
//     callback("Thums up and subscribe");
//   }
// };

watchTutorialPromise = () => {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "userLeft",
        message: ":(",
      });
    } else if (userWatchingCatMeme) {
      reject({
        name: "User watching cat meme",
        message: "Ayush < Cat",
      });
    } else {
      resolve("Thums up and subscribe");
    }
  });
};

watchTutorialPromise()
  .then((message) => {
    console.log("success: " + message);
  })
  .catch((error) => {
    console.log(error.name + " " + error.message);
  });

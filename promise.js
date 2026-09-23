// promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.
//it has three states: pending, fulfilled, and rejected.
const promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("success");
    } else {
        reject("failure");
    }
});
promise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});
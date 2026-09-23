//promise chain means it contains multiple promises that are executed in a sequence.
function step1() {
    return Promise.resolve(10);
}
step1.then((result) => {
    console.log("step 1", result);
    return result + 10;
}).then((result) => {
    console.log("step 2", result);
    return result + 10;
}).then((result) => {
    console.log("step 3", result);
    return result + 10;
}).then((result) => {
    console.log("step 4", result);
}).catch((error) => {
    console.log("error", error);
});


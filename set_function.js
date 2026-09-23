//set timeout after a certain time we get output
setTimeout(() => {
    console.log("Hello after 2 seconds");
}, 2000);
console.log("Hello immediately");

//set interval after a certain time we get output repeatedly
let count = 1;
let timer = setInterval(() => {
    console.log(`Hi ${count}`);
    count++;
    if (count > 5) {
        clearInterval(timer);
    }
}, 5000);
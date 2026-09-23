//event loop says that syncronous data (console.log) gets print first and then asynchronous data (set timeout)
console.log("A");
setTimeout(() => {
    console.log("B");
}, 0);
console.log("C");

//call stack means that a function is called and then it is executed and then it is removed from the stack. If a function calls another function.

function first() {
    console.log("first");
    second();
}
function second() {
    console.log("second");
    third();
}
function third() {
    console.log("third");
}
first();
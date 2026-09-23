//functions in js
function add(a, b) {
    return a + b;
}
console.log(add(5, 3)); // 8

//arrow func
const adding = (a, b) => {
    return a + b;
}
console.log(adding(5, 3)); // 8

//default parameter
function subtract(c, d = 0) {
    return c - d;
}
console.log(subtract(10)); // 10

//callback function
function keepadding(a, b, callback) {
    const result = a + b;
    callback(result);
}
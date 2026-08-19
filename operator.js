//operators in js
//Arithmetic operators
let x = 10;
let y = 5;
let z = x + y; // 15
console.log(z); // 15
//Comparison operators
let a = 10;
let b = 5;
console.log(a > b);
typeof a; // number
    
//Logical operators
let c = true;
let d = false;
console.log(c && d);
console.log(c || d);
console.log(!c);
//Assignment operators
let e = 10;
e += 5; // e = e + 5
console.log(e);
//Bitwise operators
let f = 10;
let g = 5;
console.log(f & g);
console.log(f | g);
console.log(f ^ g);
//Ternary operator
let h = 10;
let i = h > 5 ? "greater" : "lesser";
console.log(i); // greater
//typeof operator
let j = "hello";
console.log(typeof j); // string
//instanceof operator
let k = [1, 2, 3];
console.log(k instanceof Array); // true
//delete operator
let l = { name: "John", age: 30 };
delete l.age;
console.log(l);
//in operator
let m = { name: "John", age: 30 };
console.log("name" in m); // true
//void operator
function myFunction() {
    console.log("Hello");
}
//void myFunction(); // undefined

//new operator
function Person(name, age) {
    this.name = name;
    this.age = age;
}

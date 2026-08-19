//var
var name = "ABC";
var name = "XYZ";
console.log(name); // XYZ as var allows redeclaration and reassignment

//let
let age = 25;
//let age = 30; // Uncaught SyntaxError: Identifier 'age' has already been declared
age = 30; // Reassignment is allowed
console.log(age); // 30

//const
const PI = 3.14;
//PI = 3.14159; // Uncaught TypeError: Assignment to constant variable.
console.log(PI); // 3.14

//changing const
const student = {
    name: "Tina",
    age: 20
};
student.age = 21;
console.log(student.age); // 21

const fruits = ["apple", "banana", "orange"];
fruits.push("lemon");
console.log(fruits); // ["apple", "banana", "orange", "lemon"]
//adding at index 
fruits[4] = "grape";
console.log(fruits); // ["apple", "banana", "orange", "lemon", "grape"]
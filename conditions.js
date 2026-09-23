//conditions
//if else
let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
}
// nested if else for leap year
 function isLeapYear(year) {
                if (year % 4 === 0 && year % 100 !== 0) {
                    return true;
                } else if (year % 400 === 0) {
                    return true;
                } else {
                    return false;
                }
            }
//switch case for calculator
function calculator(a, b, operator) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return "Invalid operator";
    }
}
// while
while (age < 21) {
    console.log("You are not an adult yet.");
    age++;
}
//for
for (let i = 0; i < 5; i++) {
    console.log(i);
}


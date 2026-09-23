//some - used when some conditions are met 
//every - when all conditions are met
let marks = [10,20, 30, 40,50];
let lowmarks = marks.some(marks=>marks<40);
console.log(lowmarks);
let highermarks = marks.every(marks=>marks>40);
console.log(highermarks);
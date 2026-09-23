//call method - add data to object at runtime
const student1 = {
  name: "Yashika",
  age: 20
};
const student2 = {
  name: "ABC",
  age: 21
};
function introduce(city) {
  console.log(`Hi, my name is ${this.name}, I am ${this.age} years old and I live in ${city}.`);
}
introduce.call(student1, "Greater Noida");
introduce.call(student2, "Delhi");



const student1 = {
  name: "Yashika",
};
const student2 = {
  name: "ABC",
};
function introduce(city) {
  console.log(`Hi, my name is ${this.name}, I am ${this.age} years old and I live in ${city}.`);
}
introduce.call(student1, "Greater Noida");
introduce.call(student2, "Delhi");
//now with apply method
introduce.apply(student1, ["Greater Noida"]);
introduce.apply(student2, ["Delhi"]);
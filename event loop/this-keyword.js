//this keyword - works on objects
const name = {
    firstName: "Yashika",
    showname: function () {
        return this.firstName;
    }
};
console.log(name.showname());


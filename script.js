let stud = {
  firstname: "Gokul", //Data Properties
  lastname: "Raj",
  get fullname() {
    // Accessor Properties
    return `${stud.firstname} ${stud.lastname}`;
  },
  set fullname(value) {
    let values = value.split(" ");
    this.firstname = values[0];
    this.lastname = values[1] ?? ""; // ?? ""  is used to If lastname there execute normally . if it is not there execute only firstname
  },
};
stud.fullname = "casper";
console.log(stud.fullname);

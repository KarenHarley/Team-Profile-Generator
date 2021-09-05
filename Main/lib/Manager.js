const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, years, gender, age, project, id, email, officeNumber) {
    super(name, years, gender, age, project, id, email);
    this.officeNumber = officeNumber;
   // this.gender = gender;
   // this.age = age;
   // this.project = project;
   // this.years = years;
  }

  getRole() {
    return "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
  
}

module.exports = Manager;

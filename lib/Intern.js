const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name,years, gender, age, project, id, email, school) {
    super(name,years, gender, age, project, id, email);
    this.school = school;
  }
  getRole() {
    return "Intern";
  }

  getSchool() {
    return this.school;
  }
}

module.exports = Intern;

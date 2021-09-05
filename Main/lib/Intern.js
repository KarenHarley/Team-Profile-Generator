const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, gender, age, project, id, email, school) {
    super(name, gender, age, project, id, email);
    this.school = school;
  }
  /*
   answers.internName,
          //answers.internYears,
          answers.internGender,
          answers.internAge,
          answers.internProject,
          answers.internId,
          answers.internEmail,
          answers.internSchool
  */

  getRole() {
    return "Intern";
  }

  getSchool() {
    return this.school;
  }
}

module.exports = Intern;

const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, years, gender, age, project, id, email, github) {
    super(name, years, gender, age, project, id, email);
    this.github = github;
  }

  getRole() {
    return "Engineer";
  }

  getGithub() {
    return this.github;
  }
    
}

module.exports = Engineer;

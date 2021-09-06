class Employee {
    
  constructor(name, years, gender, age, project, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.gender = gender;
    this.age = age;
    this.project = project;
    this.years = years;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
  getYears() {
    return this.years;
  }
  getGender() {
    return this.gender;
  }
  getAge() {
    return this.age;
  }
  getCurrentProject() {
    return this.project;
  }

}

module.exports = Employee;

const Intern = require("../lib/Intern");
//name, gender, age, project, id, email, school
test("Can set school via constructor", () => {
  const testValue = "UCLA";
  const e = new Intern("Sara",2,"Female",21,"Tennis club Website",34,"Foo@gmail.com",testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Sara",2,"Female",21,"Tennis club Website",34,"Foo@gmail.com","UCLA");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UCLA";
  const e = new Intern("Sara",2,"Female",21,"Tennis club Website",34,"Foo@gmail.com",testValue);
  expect(e.getSchool()).toBe(testValue);
});

const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1,"Female",19,"Tennis club Website",34,"Foo@gmail.com",testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Foo", 1,testValue,19,"Tennis club Website",34,"Foo@gmail.com",45);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1,"Female",19,"Tennis club Website",34,"Foo@gmail.com",testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});
/*Additional functionality */

test("Can get gender via getGender()", () => {
  const testValue = "Female";
  const e = new Manager("Foo", 1,testValue,19,"Tennis club Website",34,"Foo@gmail.com",45);
  expect(e.getGender()).toBe(testValue);
});

test("Can get age of manager via getAge()", () => {
  const testValue = 19;
  const e = new Manager("Foo", 1,"Female",testValue,"Tennis club Website",34,"Foo@gmail.com",45);
  expect(e.getAge()).toBe(testValue);
});

test("Can get current project via getCurrentProject()", () => {
  const testValue = "Tennis club Website";
  const e = new Manager("Foo", 1,testValue,19,testValue,34,"Foo@gmail.com",45);
  expect(e.getCurrentProject()).toBe(testValue);
});
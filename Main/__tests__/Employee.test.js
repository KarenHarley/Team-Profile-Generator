const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Alice";
  const e = new Employee(name,3,"Male",19,"Software for Amazon",45,"test@gmail.com");
  expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const testValue = 100;
  const e = new Employee("Foo",3,"Male",19,"Software for Amazon",testValue,"test@gmail.com");
  expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1,"Male",19,"Software for Amazon",56,testValue);
  expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
  const testValue = "Alice";
  const e = new Employee(testValue,"Male",19,"Software for Amazon",54,"test@gmail.com");
  expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Employee("Foo",1,"Male",19,"Software for Amazon",testValue,"test@gmail.com");
  expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1,"Male",19,"Software for Amazon",42,testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Alice", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});
/*Additional functionality */

test("Can get years working in this company via getYears()", () => {
  const testValue = 3;
  const e = new Employee("Sara",testValue,"Female",21,"Tennis club Website",34,"Foo@gmail.com",45);
  expect(e.getYears()).toBe(testValue);
});


test("Can get gender via getGender()", () => {
  const testValue = "Female";
  const e = new Employee("Foo", 1,testValue,19,"Tennis club Website",34,"Foo@gmail.com",45);
  expect(e.getGender()).toBe(testValue);
});

test("Can get age of manager via getAge()", () => {
  const testValue = 19;
  const e = new Employee("Foo", 1,"Female",testValue,"Tennis club Website",34,"Foo@gmail.com",45);
  expect(e.getAge()).toBe(testValue);
});

test("Can get current project via getCurrentProject()", () => {
  const testValue = "Tennis club Website";
  const e = new Employee("Foo", 1,testValue,19,testValue,34,"Foo@gmail.com",45);
  expect(e.getCurrentProject()).toBe(testValue);
});
const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Sara",2,"Female",21,"Tennis club Website",34,"Foo@gmail.com",testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Sara",2,"Female",21,"Tennis club Website",34,"Foo@gmail.com","HarleyP");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Sara",2,"Female",21,"Tennis club Website",34,"Foo@gmail.com",testValue);
  expect(e.getGithub()).toBe(testValue);
});

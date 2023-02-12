const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "Katya";
    const employeeInstance = new Engineer("Katya", 2, "katyas@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "Katya";
    const employeeInstance = new Engineer("Katya", 2, "katya@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Katya", 2, "katya@gmail.com", "Katya");
    expect(employeeInstance.getRole()).toBe(returnValue);
});
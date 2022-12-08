const Intern = require('../lib/Intern');

describe("Intern", () => {
    describe("Creating Intern", () => {
      it("Should create an intern object with name, ID, email, and school", () => {
        const intern = new Intern("Barry", 12, "barry@gmail.com", "MIT");
  
        expect(intern.name).toEqual("Barry");
        expect(intern.id).toEqual(12);
        expect(intern.email).toEqual("barry@gmail.com");
        expect(intern.school).toEqual("MIT");
      });
      it("Should create an employee object with name, ID, and email", () => {
        const employee = new Employee("Barry", 12, "barry@gmail.com");
  
        expect(employee.name).toEqual("Barry");
        expect(employee.id).toEqual(12);
        expect(employee.email).toEqual("barry@gmail.com");
      });
    });
  });
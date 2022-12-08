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
      it("Should take school from Intern", () => {
        const employee = new Intern("Barry", 12, "barry@gmail.com", "MIT");
        const school = employee.getSchool();
  
        expect(school).toEqual("MIT");
      });
      it("Should take role from Intern", () => {
        const employee = new Intern("Barry", 12, "barry@gmail.com", "MIT");
        const role = employee.getRole();
  
        expect(role).toEqual("Intern");
      });
    });
  });
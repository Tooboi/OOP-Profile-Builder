const Manager = require('../lib/Manager');

describe("Manager", () => {
    describe("Creating Manager", () => {
      it("Should create a manager object with name, ID, email, and office number", () => {
        const manager = new Manager("Barry", 12, "barry@gmail.com", 1220);
  
        expect(manager.name).toEqual("Barry");
        expect(manager.id).toEqual(12);
        expect(manager.email).toEqual("barry@gmail.com");
        expect(manager.officeNum).toEqual(1220);
      });
      it("Should take role from Intern", () => {
        const employee = new Manager("Barry", 12, "barry@gmail.com", "MIT");
        const role = employee.getRole();
  
        expect(role).toEqual("Manager");
      });
    });
  });
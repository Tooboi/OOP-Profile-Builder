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
      it("Should create an employee object with name, ID, and email", () => {
        const employee = new Employee("Barry", 12, "barry@gmail.com");
  
        expect(employee.name).toEqual("Barry");
        expect(employee.id).toEqual(12);
        expect(employee.email).toEqual("barry@gmail.com");
      });
    });
  });
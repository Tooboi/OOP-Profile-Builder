const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe("Creating Engineer", () => {
      it("Should create an engineer object with name, ID, email, and github", () => {
        const engineer = new Engineer("Barry", 12, "barry@gmail.com", "bonny");
  
        expect(engineer.name).toEqual("Barry");
        expect(engineer.id).toEqual(12);
        expect(engineer.email).toEqual("barry@gmail.com");
        expect(engineer.github).toEqual("bonny");
      });
      it("Should create an employee object with name, ID, and email", () => {
        const employee = new Employee("Barry", 12, "barry@gmail.com");
  
        expect(employee.name).toEqual("Barry");
        expect(employee.id).toEqual(12);
        expect(employee.email).toEqual("barry@gmail.com");
      });
    });
  });
const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Creating Employee", () => {
    it("Should create an employee object with name, ID, and email", () => {
      const employee = new Employee("Barry", 12, "barry@gmail.com");

      expect(employee.name).toEqual("Barry");
      expect(employee.id).toEqual(12);
      expect(employee.email).toEqual("barry@gmail.com");
    });
    it("Should create an employee object with name, ID, and email", () => {
      const employee = new Employee("Barry", 12, "barry@gmail.com");

      expect(employee.name).toEqual("Barry");
      expect(employee.id).toEqual(12);
      expect(employee.email).toEqual("barry@gmail.com");
    });
  });
});

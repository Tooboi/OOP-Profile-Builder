const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Creating Employee", () => {
    it("Should create an employee object with name, ID, and email", () => {
      const employee = new Employee("Barry", 12, "barry@gmail.com");

      expect(employee.name).toEqual("Barry");
      expect(employee.id).toEqual(12);
      expect(employee.email).toEqual("barry@gmail.com");
    });
    it("Should take name from Employee", () => {
      const employee = new Employee("Barry", 12, "barry@gmail.com");
      const name = employee.getName();

      expect(name).toEqual("Barry");
    });
    it("Should take ID from Employee", () => {
      const employee = new Employee("Barry", 12, "barry@gmail.com");
      const id = employee.getId();

      expect(id).toEqual(12);
    });
    it("Should take email from Employee", () => {
      const employee = new Employee("Barry", 12, "barry@gmail.com");
      const email = employee.getEmail();

      expect(email).toEqual("barry@gmail.com");
    });
    it("Should take role from Employee", () => {
      const employee = new Employee("Barry", 12, "barry@gmail.com");
      const role = employee.getRole();

      expect(role).toEqual("Employee");
    });
  });
});

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
      it("Should take GitHub from Engineer", () => {
        const employee = new Engineer("Barry", 12, "barry@gmail.com", "bonny");
        const github = employee.getGithub();
  
        expect(github).toEqual("bonny");
      });
      it("Should take role from Engineer", () => {
        const employee = new Engineer("Barry", 12, "barry@gmail.com", "bonny");
        const role = employee.getRole();
  
        expect(role).toEqual("Engineer");
      });
    });
  });
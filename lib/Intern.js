const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name, id, email, school) {
      super (name, id, email);
      this.school = school
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return 'Manager';
    }
  }
//   const john = new Manager("Jawn Morgan", 4, "qwerty@gmail.com", 2200);
//   john.getRole();
  
  module.exports = Intern;
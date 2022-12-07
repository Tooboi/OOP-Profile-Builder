const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, id, email, officeNum) {
      super (name, id, email);
      this.officeNum = officeNum
    }
    getRole() {
        return 'Manager';
    }
  }
//   const john = new Manager("Jawn Morgan", 4, "qwerty@gmail.com", 2200);
//   john.getRole();
  
  module.exports = Manager;
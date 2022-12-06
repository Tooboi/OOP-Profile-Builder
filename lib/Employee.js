class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.getName = () => {
            
            console.log(name);
        };
        this.getId = () => {
            
            console.log(id);
        };
        this.getEmail = () => {
            
            console.log(email);
        };
    }
}
Employee.prototype.getName = function () {
    name = this.name;
    return name;
}
Employee.prototype.getId = function () {
    id = this.id;
    return id;
}
Employee.prototype.getEmail = function () {
    email = this.email;
    return email;
}
Employee.prototype.getRole = function () {
    Employee = {
        name: this.name,
        id: this.id,
        email: this.email
    };
    console.log(`Employee name is ${this.name} with an id of ${this.id} and email of ${this.email}`);
    return Employee;
}

const john = new Employee('Jawn Morgan', 4, 'qwerty@gmail.com');
john.getRole()
console.log(Employee);
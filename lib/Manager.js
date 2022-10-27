const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Manager";
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.OfficeNumber;
}}

module.exports = Manager;
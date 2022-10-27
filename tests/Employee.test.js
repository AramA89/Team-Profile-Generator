const Employee = require('../lib/Employee.js')

test('should create employee instance', () => {
    const newEmployee = new Employee()
    expect(typeof newEmployee).toBe('object')
});
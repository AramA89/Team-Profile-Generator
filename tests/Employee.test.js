const Employee = require('../lib/Employee.js')

test('Should create employee instance', () => {
    const newEmployee = new Employee()
    expect(typeof newEmployee).toBe('object')
});

test('Should set name via constructor', () => {
    const testName = 'Aram';
    const newEmployee = new Employee(testName);
    expect(newEmployee.name).toBe(testName);
});

test('Should set id via constructor', () => {
    const testId = "2"
    const newEmployee = new Employee('Aram', testId);
    expect(newEmployee.id).toBe(testId);
});

test('Should set email via constructor', () => {
    const testEmail = 'mail@test.com'
    const newEmployee = new Employee('Aram', 2, testEmail);
    expect(newEmployee.email).toBe(testEmail);
});

test('Should get name via getName()', () => {
    const testName = 'Aram';
    const newEmployee = new Employee(testName);
    expect(newEmployee.getName()).toBe(testName);
});

test('Should get id via getId()', () => {
    const testId = '2';
    const newEmployee = new Employee('Aram', testId);
    expect(newEmployee.getId()).toBe(testId);
});

test('Should get email via getEmail()', () => {
    const testEmail = 'mail@test.com';
    const newEmployee = new Employee('Aram', 2, testEmail);
    expect(newEmployee.getEmail()).toBe(testEmail);
});

test('Should return Employee via getRole()', () => {
    const testEmployee = 'Employee';
    const newEmployee = new Employee('Aram', 2, 'mail@test.com');
    expect(newEmployee.getRole()).toBe(testEmployee);
});
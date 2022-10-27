const Manager = require('../lib/Manager');

test('Should set office number via constructor', () => {
  const testNumber = '50';
  const newManager = new Manager('Aram', 2, 'mail@test.com', testNumber);
  expect(newManager.officeNumber).toBe(testNumber);
});

test('Should return Manager via getRole', () => {
  const testRole = 'Manager';
  const newManager = new Manager('Aram', 2, 'mail@test.com', 50);
  expect(newManager.getRole()).toBe(testRole);
});

test("Should get office number via getOfficeNumber()", () => {
  const testNumber = "UCLA";
  const newManager = new Manager('Aram', 2, 'mail@test.com', testNumber);
  expect(newManager.getOfficeNumber()).toBe(testNumber);
});
const Intern = require('../lib/Intern');

test('Should set school via constructor', () => {
  const testSchool = 'UCLA';
  const newIntern = new Intern('Aram', 2, 'mail@test.com', testSchool);
  expect(newIntern.school).toBe(testSchool);
});

test('Should return Intern via getRole', () => {
  const testIntern = 'Intern';
  const newIntern = new Intern('Aram', 2, 'mail@test.com', 'UCLA');
  expect(newIntern.getRole()).toBe(testIntern);
});

test("Should get school via getSchool()", () => {
  const testSchool = "UCLA";
  const newIntern = new Intern('Aram', 2, 'mail@test.com', testSchool);
  expect(newIntern.getSchool()).toBe(testSchool);
});
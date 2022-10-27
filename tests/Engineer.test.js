const Engineer = require('../lib/Engineer');

test('Should get GitHub via constructor', () => {
    const testGithub = 'GitHub';
    const newEngineer = new Engineer('Aram', 2, 'mail@test.com', testGithub);
    expect(newEngineer.github).toBe(testGithub);
});

test('Should return Engineer via getRole()', () => {
    const testEngineer = 'Engineer';
    const newEngineer = new Engineer('Aram', 2, 'mail@test.com', 'GitHub');
    expect(newEngineer.getRole()).toBe(testEngineer); 
});

test('Should get GitHub via getGitHub()', () => {
    const testGithub = 'GitHub';
    const newEngineer = new Engineer('Aram', 2, 'mail@test.com', testGithub);
    expect(newEngineer.getGitHub()).toBe(testGithub);
});
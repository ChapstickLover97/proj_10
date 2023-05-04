const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Ashton', '42069', 'ashtonbalder@gmail.com', 'ChapstickLover97');

test('Can get the values for the engineer object', () => {
    expect(engineer.name).toBe('Ashton');
    expect(engineer.id).toBe('42069');
    expect(engineer.email).toBe('ashtonbalder@gmail.com');
    expect(engineer.gitHub).toBe('ChapstickLover97');
});

test('Cet the name from the getName() method', () => {
    expect(engineer.getName()).toBe('Ashton');
});

test('Can get the id from the getId() method', () => {
    expect(engineer.getId()).toBe('42069');
});

test('Can get the email from the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('ashtonbalder@gmail.com');
});

test('test if we can get the github username from the getGithub() method', () => {
    expect(engineer.getGithub()).toBe('ChapstickLover97');
});

test('test if we can get the role from the getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});
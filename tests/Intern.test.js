const Intern = require('../lib/Intern');
const intern = new Intern('Ashton', '42069', 'ashtonbalder@gmail.com', 'St. Olaf');

test('Can get the values for the engineer object', () => {
    expect(intern.name).toBe('Ashton');
    expect(intern.id).toBe('42069');
    expect(intern.email).toBe('ashtonbalder@gmail.com');
    expect(intern.school).toBe('St. Olaf');
});

test('Can get the name from the getName() method', () => {
    expect(intern.getName()).toBe('Ashton');
});

test('Can get the id from the getId() method', () => {
    expect(intern.getId()).toBe('42069');
});

test('Can get the email from the getEmail() method', () => {
    expect(intern.getEmail()).toBe('ashtonbalder@gmail.com');
});

test('Can get the school name from the getSchool() method', () => {
    expect(intern.getSchool()).toBe('St. Olaf');
});

test('Can get the role from the getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});
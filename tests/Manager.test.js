const Manager = require('../lib/Manager');
const manager = new Manager('Ashton', '42069', 'ashtonbalder@gmail.com', '8008135');

test('Can get the values for the manager object', () => {
    expect(manager.name).toBe('Ashton');
    expect(manager.id).toBe('42069');
    expect(manager.email).toBe('ashtonbalder@gmail.com');
    expect(manager.officeNumber).toBe('8008135');
});

test('Can get the name from the getName() method', () => {
    expect(manager.getName()).toBe('Ashton');
});

test('Can get the id from the getId() method', () => {
    expect(manager.getId()).toBe('42069');
});

test('Can get the email from the getEmail() method', () => {
    expect(manager.getEmail()).toBe('ashtonbalder@gmail.com');
});

test('Can get the office number from the getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('8008135');
});

test('Can get the role from the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});
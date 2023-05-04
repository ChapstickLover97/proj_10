const Employee = require('../lib/Employee');
const employee = new Employee('Ashton', '42069', 'ashtonbalder@gmail.com');

test('Can get the values for the employee object', () => {
    expect(employee.name).toBe('Ashton');
    expect(employee.id).toBe('42069');
    expect(employee.email).toBe('ashtonbalder@gmail.com');
});

test('Can get the name from the getName() method', () => {
    expect(employee.getName()).toBe('Ashton');
});

test('Can get the id from the getId() method', () => {
    expect(employee.getId()).toBe('42069');
});

test('Can get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('ashtonbalder@gmail.com');
});

test('Can get the role from the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});
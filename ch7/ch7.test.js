import Order from './7-4';
import Person from './7-5';

// 7-4
test('ch7/7-4.js Order get price Test', () => {
    const item = {
        price: 4500,
    };
    const order = new Order(2, item);
    expect(8550).toBe(order.price);
});

// 7-5
test('ch7/7-5.js check same person infomation', () => {
    const person = new Person('엘리', '010', '12345678');

    expect(person.name).toBe('엘리');
    person.name = '모카';
    expect(person.name).toBe('모카');
    expect(person.officeAreaCode).toBe('010');
    expect(person.officeNumber).toBe('12345678');
    expect(person.telephoneNumber).toBe('(010) 12345678');
});

import { Validator } from '../src/app.js';

test.each([
    ['11Ivan', 'Нельзя использовать цифры тире в начале имени'],
    ['Ivan11', 'Нельзя использовать цифры и тире в конце имени'],
    ['Ivan1111Ivan', 'Нельзя использовать более 3 цифр подряд'],
    ['Иван', 'Допустимы только латинские буквы, символы тире, подчёркивания и цифры'],
    ['Ivan', true],
]) (
('test validator username'), (username, errors) => {
    const validator = new Validator();
    const result = validator.validateUsername(username);
    expect(result).toBe(errors);
});
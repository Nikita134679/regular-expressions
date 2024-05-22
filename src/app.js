export class Validator {
    validateUsername(username) {
      if (username.match(/[^a-zA-Z0-9_-]/)) {
        return 'Допустимы только латинские буквы, символы тире, подчёркивания и цифры';
      };
      if (username.match(/^[\d_-]/)) {
        return 'Нельзя использовать цифры тире в начале имени';
      };
      if (username.match(/[\d_-]$/)) {
        return 'Нельзя использовать цифры и тире в конце имени';
      };
      if (username.match(/[\d]{4}/)) {
        return 'Нельзя использовать более 3 цифр подряд';
      };
      return true
    };
};
const validator = new Validator();
const username = 'hhhh';
const result = validator.validateUsername(username);
console.log(result);
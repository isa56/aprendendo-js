const name = 'Isa';
const lastName = 'Ferreira';

const sayName = () => {
  return (name + ' ' + lastName);
};

module.exports.name = name;
exports.lastName = lastName;

console.log(module.exports);

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  const result = arr.some((convidada)=> convidada === name);
  return result;
};

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));


//every

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (people, age) => {
  const result = people.every((pessoa) => pessoa.age >= age);
  return result;
}

console.log(verifyAges(people, 18));
console.log(verifyAges(people, 14));
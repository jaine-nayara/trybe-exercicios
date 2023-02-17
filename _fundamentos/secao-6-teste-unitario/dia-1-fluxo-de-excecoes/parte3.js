const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

/* Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela. */
function trocaTurno(objeto, chave, valor) {
  objeto[chave] = valor;
  return objeto;
}
console.log(trocaTurno(lesson1,'turno', 'noite'));

/* Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro. */
function listaKey(objeto) {
  const chaves = Object.keys(objeto);
  return chaves;
}
console.log(listaKey(lesson1));

/* Crie uma função para mostrar o tamanho de um objeto. */
function tamanhoObjeto(objeto){
  const tamanho = Object.keys(objeto).length;
  return tamanho
}
console.log(tamanhoObjeto(lesson1));

function allLessons() {
  const all = Object.assign({},{lesson1,lesson2,lesson3});
  return all
}
console.log(allLessons())
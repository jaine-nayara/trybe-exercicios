const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

/* Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947. */

const authorBornIn1947 = (arrayBooks) => {
  const authorWho = arrayBooks.find((element) => element.author.birthYear === 1947);
  return authorWho.author.name;
}
console.log(authorBornIn1947(books));

const expectedResult = 'Duna';

const smallerName = () => {
  let nameBook;
  books.forEach((book) => {
    if (!nameBook || book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  });

  return nameBook;
}
console.log(smallerName());

/* Encontre o primeiro livro cujo nome possua 26 caracteres. */
const getNamedBook = () => {
  return books.find((element) => element.name.length === 26)
}
console.log(getNamedBook(books))


/* Faça uma função que retorne true se todas as pessoas autoras tiverem nascido no século XX, ou false, caso contrário. */
const everyoneWasBornOnSecXX = () => {
  return books.every((element) => element.author.birthYear > 1901 && element.author.birthYear < 2000 )
}
console.log(everyoneWasBornOnSecXX());


const someBookWasReleaseOnThe80s = () => {
  return books.some((element) => element.releaseYear >= 1980 && element.releaseYear < 1990);
}

console.log(someBookWasReleaseOnThe80s());

const authorUnique = () => {
  return books.every((book) => {
    books.some((element) => element.author.birthYear === book.author.birthYear)
    })
}
console.log(authorUnique());

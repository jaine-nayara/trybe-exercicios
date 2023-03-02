const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

function verificaPontuacao (array1, array2) {
  let pontuacao = 0;
  for (let index in array1) {
    if (array1[index] === array2[index]) {
      pontuacao += 1;
    } else if (array2[index] === 'N.A') {
      pontuacao += 0;
    } else {
      pontuacao -= 0.5;
    }
  }
  return pontuacao;
}

const solucoes = (firstArray, secondArray, functionSolutions) => {
  return functionSolutions(firstArray, secondArray);
}

console.log(solucoes(RIGHT_ANSWERS, STUDENT_ANSWERS, verificaPontuacao))
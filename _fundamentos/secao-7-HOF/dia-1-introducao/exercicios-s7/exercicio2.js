/* Sorteador de loteria */

const checagem = (nApostado, nSorteado) => nApostado === nSorteado;

const resultadoSorteio = (numero, checagemF) => {
  const nAleatorio = Math.floor(Math.random() * 5)+1;
  console.log(nAleatorio)
  return checagemF(numero,nAleatorio) ? `Parabéns` : `Tente Novamente`
}

console.log(resultadoSorteio(3,checagem))
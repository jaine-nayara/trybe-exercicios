/* troca cor de fundo */
const buttonBG = document.querySelectorAll("#cor-de-fundo>button");
function trocaCorBG(cor) {
  document.body.style.backgroundColor = cor;
  localStorage.setItem("corBG", cor);
}
for (let i = 0; i < buttonBG.length; i += 1) {
  buttonBG[i].addEventListener("click", () => {
    let corBG = buttonBG[i].innerHTML;
    trocaCorBG(corBG);
  });
}

/* troca cor do texto */
const buttonText = document.querySelectorAll("#cor-da-fonte>button");
function trocaCorTexto(cor) {
  document.body.style.color = cor;
  localStorage.setItem("corText", cor);
}
for (let i = 0; i < buttonText.length; i += 1) {
  buttonText[i].addEventListener("click", () => {
    let corT = buttonText[i].innerHTML;
    trocaCorTexto(corT);
  });
}

/* troca fonte */
const buttonEstilo = document.querySelectorAll("#tamanho-fonte>button");
function trocaTamanhoFonte(numero) {
  document.body.style.fontSize = numero;
  localStorage.setItem("tamanhoFonte", numero);
}
for (let i = 0; i < buttonEstilo.length; i += 1) {
  buttonEstilo[i].addEventListener("click", () => {
    let numero = buttonEstilo[i].innerHTML;
    trocaTamanhoFonte(numero);
  });
}

/* trocar espaçamento */
const buttonEspacamento = document.querySelectorAll("#espacamento>button");
function trocaEspacamento(numero) {
  document.body.style.lineHeight = numero;
  localStorage.setItem("espacamento", numero);
}
for (let i = 0; i < buttonEspacamento.length; i += 1) {
  buttonEspacamento[i].addEventListener("click", () => {
    let espac = buttonEspacamento[i].innerHTML;
    trocaEspacamento(espac);
  });
}

/* trocar tipo de fonte */
const buttonFonte = document.querySelectorAll("#fonte>button");
function trocaFonte(fonte) {
  document.body.style.fontFamily = fonte;
  localStorage.setItem("fonte", fonte);
}
for (let i = 0; i < buttonFonte.length; i += 1) {
  buttonFonte[i].addEventListener("click", () => {
    let fonte = buttonFonte[i].innerHTML;
    trocaFonte(fonte);
  });
}

window.onload = () => {
  trocaCorTexto(localStorage.getItem("corText"));
  trocaCorBG(localStorage.getItem("corBG"));
  trocaTamanhoFonte(localStorage.getItem("tamanhoFonte"));
  trocaEspacamento(localStorage.getItem("espacamento"));
  trocaFonte(localStorage.getItem("fonte"));
};

const titulo = document.getElementById("header-container");
titulo.style.backgroundColor = 'green';
const direita = document.getElementsByClassName("emergency-tasks");
for (let i = 0; i < direita.length; i+= 1){
    direita[i].style.backgroundColor = 'pink';
}

const tituloUrgente = document.getElementsByClassName("title1");
for (i = 0; i <= direita.length; i+= 1){
    tituloUrgente[i].style.backgroundColor = 'purple';
}
const esquerda = document.getElementsByClassName("no-emergency-tasks");
for (i = 0; i < direita.length; i+= 1){
    esquerda[i].style.backgroundColor = 'yellow';
}
const tituloNaoUrgente = document.getElementsByClassName("title2");
for (i = 0; i <= direita.length; i+= 1){
    tituloNaoUrgente[i].style.backgroundColor = "black";
}

const rodape = document.getElementById("footer-container");
rodape.style.backgroundColor = "green"
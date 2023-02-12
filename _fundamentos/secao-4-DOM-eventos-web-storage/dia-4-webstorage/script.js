window.onload = () => {
const functionTrocaCorBG = (cor) => {
  document.body.style.backgroundColor = cor;
  localStorage.setItem('backgroundColor', cor);
}


}
const buttonBG = document.querySelectorAll('#cor-de-fundo>button');
for (let i = 0; buttonBG.length; i += 1){
  buttonBG[i] = document.addEventListener('click', (event) => {
    functionTrocaCorBG(event.target.innerHTML);
  })
}


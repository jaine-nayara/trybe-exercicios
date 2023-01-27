//Percorra o array imprimindo todos os valores nele contidos com a função console.log()
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let i=0; i<numbers.length; i++){
    console.log(numbers[i]);
}

//Some todos os valores contidos no array e imprima o resultado;
let soma =0;
for (let i=0; i<numbers.length; i++){
    soma += numbers[i];
}
console.log("A soma do Array é: ", soma);

//Calcule e imprima a média aritmética dos valores contidos no array;
let media = soma/numbers.length;
console.log("A média aritmética é: ", media);


//Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;
if (media>20){
    console.log("valor maior que 20");
} else{
    console.log("valor menor ou igual a 20");
}

//Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let maior = numbers[0];
for (let i=1; i<numbers.length; i++){
    if (numbers[i]>maior){
        maior = numbers[i];
    }
}
console.log("O maior valor do Array é: ", maior);

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
let contImpar = 0;
for (let i=0; i<numbers.length; i++){
    if (numbers[i]%2 != 0){
        contImpar+=1;
    }
}
if (contImpar == 0){
    console.log("Nenhum valor ímpar encontrado");
}else{
    console.log("Existem ", contImpar," valores ímpares no array");
}

//Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let menor = numbers[0];
for (let i=1; i<numbers.length; i++){
    if (numbers[i] < menor){
        menor = numbers[i];
    }
}
console.log("O menor valor do Array é: ", menor);

//Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let novoArray =[];
for (let i=1; i<=25;i++){
    novoArray.push(i);
}
console.log(novoArray);

//Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
for (let i=0; i<25;i++){
    console.log(novoArray[i]/2);
}
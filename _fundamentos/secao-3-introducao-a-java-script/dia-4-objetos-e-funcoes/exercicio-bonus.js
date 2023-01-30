//Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

let romanos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}
function romanoParaNumero(algarismo,objeto){
    for (let i in objeto){
        if (algarismo == i){
            return objeto[i];
        }
    }
}
let algarismos = "MI";
function retornarNumero(algarismos){
let fatiado = algarismos.split('')
    let numero = 0;
    for (let i in fatiado){
        numero += romanoParaNumero(fatiado[i],romanos)
    }
    return numero;
}
console.log(retornarNumero(algarismos))

//A partir do array de frutas basket, retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array [‘Melancia’, ‘Abacate’, ‘Melancia’, ‘Melancia’, ‘Uva’], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.

const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
  ];

let contMelancia = 0;
let contUva = 0;
let contAbacate = 0;

for (let i in basket){
    if (basket[i] == "Melancia"){
        contMelancia+=1;
    }else if (basket[i] == "Uva"){
        contUva += 1;
    }else if (basket[i] == "Abacate"){
        contAbacate += 1;
    }
}
fruitObject = {
    uva: contUva,
    melancia: contMelancia,
    abacate: contAbacate,
}
console.log(`Sua cesta possui ${fruitObject.melancia} melancias, ${fruitObject.abacate} abacates e ${fruitObject.uva} uvas.`);


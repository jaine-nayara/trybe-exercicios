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
let algarismos = "X";
// function retornarNumero(algarismo){
//     let fatiado = algarismo.split('')
//     console.log(fatiado)
//     let numero = '';
//     for (let i in fatiado){
//         console.log(i)
//         numero += romanoParaNumero(fatiado[i],romanos)
//     }
//     return numero;
// }

console.log(romanoParaNumero(algarismos,romanos))
//console.log(retornarNumero(algarismos))
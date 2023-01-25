//O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

let fat = 1;
let n =10;
for (let i=2;i<=n;i+=1){
    fat*=i
}
console.log("O fatorial de ",n,"é ",fat);

//Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”.

let word = 'tryber';
let inv = [];
let index = word.length;
for (let i=1;i<=index;i+=1){
    inv.push(word[index - i]);
}
console.log(inv);

//Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = array[0];
let menor = array[0];
for (let i=1; i<=array.length; i+=1){
    if (array[i] > maior ){
        maior = array[i];
    }
    if (array[i] < menor ){
        menor = array[i];
    }
}
console.log("A maior palavra desse array é", maior);
console.log("A menor palavra desse array é", menor)

//Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.
let primos = [];
for (let i = 2; i <=50; i+=1){
    let confirm = true;
    for (let j = 2; j < i; j+=1){
        if (i%j == 0){
            confirm = false;
        }
    }
        if (confirm) {
            primos.push(i);
        }
}
let ultimo = primos.length;

console.log("O maior número primo entre 2 e 50 é", primos[ultimo-1]);

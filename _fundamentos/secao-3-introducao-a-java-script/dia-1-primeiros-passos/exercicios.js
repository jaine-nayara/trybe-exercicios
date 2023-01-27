//Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.

const number1 = 10;
const number2 = 15;
const number3 = 17;
let validation = false;
if (number1%2 == 0 || number2%2 == 0 || number3%2 ==0){
    validation = true;
}
console.log(validation);

//Utilize if/else para escrever um código que, dado um salário bruto, calcule o líquido a ser recebido.
let salary = 3000.00;
let inss;
let ir;
if (salary < 1556.94){
    inss = 0.08 * salary;
} else if (salary < 2594.92) {
    inss = 0.09 * salary;
} else if (salary < 5189.82) {
    inss = 0.11 * salary;
} else {
    inss = 570.88;
}
salary -= inss;
console.log(salary)
if (salary < 1903.98){
    ir = 0;
} else if (salary < 2826.65) {
    ir = 0.075 * salary - 142.80;
} else if (salary < 3751.05) {
    ir = 0.15 * salary - 354.80;
} else if (salary < 4664.68) {
    ir = 0.225 * salary - 636.13;
} else {
    ir = 0.275 * salary - 869.36;
}
console.log(salary -ir);
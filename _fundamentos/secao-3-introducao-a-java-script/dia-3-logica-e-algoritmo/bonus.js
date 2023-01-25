//Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
let n = 5;
let linha = "";
for (let i = 0; i < n; i+=1){
    linha += "*";
}
for (let i = 0; i < n; i+=1){
    console.log(linha);
}
console.log("")
//Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.
for (let i = 0; i < n; i+=1){
    linha2 = ""
    for (let j = 0; j <= i; j+=1){
        linha2+= "*";
    }
    console.log(linha2);
}

console.log();

//Agora inverta o lado do triângulo.
n = 5
let cont = n -1
for (let i = 0; i < n; i+=1){
    linha2 = "";
    for (let j = 0; j < n; j+=1){
        if (i < cont){
            linha2 += " ";
        }else{
            linha2 += "*"
        }
    }
    console.log(linha2);
    n -= 1;
}
 // não terminei

 console.log();
//Depois, faça uma pirâmide com n asteriscos de base:
let linha3;
for (let i = 1; i <= n; i+=2){
    
    
    if (i == 1){
       linha3 = "  *"
    }else if (i == 3){
        linha3 = " ***"
    }else if (i == 5){
        linha3 = "*****"
    }
    console.log(linha3);
}

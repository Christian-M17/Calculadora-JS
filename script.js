function calculadora(){
const operacao = prompt('Selecione a operação \n 1- Soma(+) \n 2- Subtracao(-) \n 3-Multiplicação(*) \n 4-Divisão Real (/) \n 5-Resto (%) \n 6-Potenciação (**) ')

var n1= Number(prompt('Insira o primeiro número'));
var n2= Number(prompt('Insira o segundo número'));
var resultado;


function soma(){
 resultado = n1 + n2;
 alert(`${n1} + ${n2} = ${resultado}`)
 novaOperacao();
}

function subtracao(){
    resultado = n1 - n2;
    alert(`${n1} - ${n2} = ${resultado}`)
    novaOperacao();
   }

function multiplicacao(){
    resultado = n1 * n2;
    alert(`${n1} * ${n2} = ${resultado}`)
    novaOperacao();
   }

function divisao(){
    resultado = n1 / n2;
    alert(`${n1} / ${n2} = ${resultado}`)
    novaOperacao();
   }

function resto(){
    resultado = n1 % n2;
    alert(`O Resto de ${n1} / ${n2} é ${resultado}`)
    novaOperacao()   
}

function potenciacao(){
    resultado = n1 ** n2;
    alert(`${n1} ** ${n2} = ${resultado}`)
    novaOperacao();
   }

function novaOperacao() {
 let opcao = prompt('Deseja fazer outra operação? \n 1- Sim \n 2- Não')
 if (opcao == 1){
    calculadora();
 }
 else if (opcao == 2){
    alert('Até mais');
     }
 else {alert('Digite uma opção válida!')
 novaOperacao();
}
}

if (operacao == 1) { 
    soma();
}
else if (operacao == 2){
    subtracao()
}
else if (operacao == 3){
    multiplicacao();
}
else if (operacao == 4){
    divisao();
}
else if (operacao == 5){
    resto();
}
else if (operacao==6){
    potenciacao();
}
}
calculadora();
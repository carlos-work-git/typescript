"use strict";
console.log("From ./modulo_4_recursos_ECMAScript6/ecmascript.js");
console.log('');
// let & const
// console.log(variavelNaoDeclarada);
// var variavelNaoDeclarada = '?'; /*hoisting -  o tipo var para variáveis acaba issando a variavel para "topo" da leitura
// desconsiderando o erro de variavel não declarada*/
//var variavelNaoDeclarada = '?'; // no let não ocorre esse Issamento da variável ao topo... logo ocorrerá erro de falta de declaração.
let estaFrio = true;
if (estaFrio) {
    //var acao = "colocar casaco" // vai imprimir este valor mesmo fora deste escopo
    let acao = "colocar casaco"; // não imprimirá o valor atribuido fora do escopo
    console.log(acao);
}
//console.log(acao)
const cpf = '123.456.789.99'; // Nota: variável const também é acessível somente dentro de seu contexto, não é por padrão global
//cpf = '789.456.123.11'
console.log(cpf);
// Arrow Function
// Criando uma função padrão
function somar(n1, n2) {
    return n1 + n2;
}
console.log(somar(2, 2));
// Atribuindo Função anônima atribuida à uma variável
/* Como a função é anônima, para ela ser chamada, é necessário atribuila à uma variável,
   onde essa váriavel poderá ser usada para fazer a chamada da função.*/
const soma = function (n1, n2) {
    return n1 + n2;
};
console.log(soma(2, 2));
// Arrow Function (Sempre é Anônima)
// Retorno implicito
const somarAB = (numA, numB) => numA + numB;
console.log(somarAB(2, 2));
// Retorno implicito
const multiplicarAB = (numA, numB) => numA * numB;
console.log(multiplicarAB(2, 2));
// Retorno explicito
const subtrairAB = (numA, numB) => {
    return numA - numB;
};
console.log(subtrairAB(2, 2));
// this
console.log('');
console.log("this");
console.log('');
// this
function normalComThis() {
    console.log(this); // Sem erro no Javascript
}
const normalComThisEspecial = normalComThis.bind({ nome: 'Ana' });
normalComThisEspecial();
// this ??? Nota: This varia com o escopo ou a ultima chamada que o "invocou"
console.log(this);
const arrowComThis = () => console.log(this); // Sem erro no Javascript
arrowComThis();
const arrowComThisEspecial = arrowComThis.bind({ nome: 'Ana' });
arrowComThisEspecial();

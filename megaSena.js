/*
Pequeno projeto para seleção de números a serem apostados, 
na mega-sena baseado em seus quadrantes, como foi cogitado 
a forma com a qual ocorrem os sorteios. 

*/


var _ = require ("lodash");


var primeiroQuadrante = [1, 2, 3, 4, 5, 11, 12, 13, 14, 15, 21, 22, 23, 24, 25]
var segundoQuadrante = [6, 7, 8, 9, 10, 16, 17, 18, 19, 20, 26, 27, 28, 29, 30]
var terceiroQuadrante = [31, 32, 33, 34, 35, 41, 42, 43, 44, 45, 51, 52, 53, 54, 55]
var quartoQuadrante = [36, 37, 38, 39, 40, 46, 47, 48, 49, 50, 56, 57, 58, 59, 60]

//função para escolher as dezenas
const escolherDezenas = (arr, num = 1) => {
    const res = [];

    for(let i = 0; i < num; ){
       const random = Math.floor(Math.random() * arr.length);
       if(res.indexOf(arr[random]) !== -1){
          continue;
       };
       res.push(arr[random]);
       i++;
    };
    return res;
 };
 
 //declaração da variavel dezenas e a função escolherDezenas
 // realizando o trabalho.
 let dezenas = []
 dezenas.push(escolherDezenas(primeiroQuadrante, 2));
 dezenas.push(escolherDezenas(segundoQuadrante, 2));
 dezenas.push(escolherDezenas(terceiroQuadrante, 2));
 dezenas.push(escolherDezenas(quartoQuadrante, 2));

 //transformar a matriz em um array
var dezenasSelecionadasArray = dezenas.reduce((list, sub) => list.concat(sub), [])

//da matriz com 8 números, será feita uma nova seleção com 6 números e eles serão 
//ordenados. 

var dezenasParaJogar = _.sampleSize(dezenasSelecionadasArray, 6).sort(function (a,b) {
   return a - b    
})

//mostra os números sorteados.
 console.log(dezenasParaJogar)

 







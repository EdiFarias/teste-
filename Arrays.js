// =====================1. Concatenação de Arrays====================

// Crie dois arrays, um com nomes de cidades brasileiras e outro com nomes de cidades estrangeiras.
// Utilize o método concat para unir esses dois arrays em um único.
// Exiba o array resultante no console.

const cidades_brasileiras = ['Reserva', 'Curitiba', 'Arapiraca', 'Prata', 'Itapevi'];

const cidades_estrangeiras = ['Vancouver', 'Toronto', 'New Jersey', 'Estocolmo', 'new York'];

const todas_as_cidades = cidades_brasileiras.concat(cidades_estrangeiras);

console.log(todas_as_cidades);

// ---------------------------------------------------------------------------------------
// ====================2.  Removendo e Substituindo Elementos com Splice===================================

// Crie um array com 6 nomes de animais.
//  Use o método splice. para remover 2 animais a partir da terceira posição e substituí-los por outros 2 animais diferentes.
//  Exiba o array resultante no console.
// Exemplo de entrada array = [leão, capivara, calopsita, onça, gavião, porco],
// saída esperada: leão, capivara, calopsita, tigre, cavalo, porco.

const animais = ['leão', 'capivara', 'calopsita', 'onça', 'gavião', 'porco'];

animais.splice(3, 2, 'tigre', 'cavalo');

console.log(animais, '\n');

// ------------------------------------------------------------------------------------------
// ===================3.   Verificando Condição com Estruturas de Controle==============================

// Crie um array com vários números, incluindo alguns maiores que 50.
// Use estruturas de controle simples para verificar se há pelo menos um número maior que 50.
// Exiba uma mensagem no console informando o resultado.
// Exemplo de entrada array = [10, 20, 30, 40, 60], saída esperada: “O array possui 1 número maior que 50ˮ.

let numeros = [10, 20, 30, 40, 60];
let contador = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > 50) {
    contador++;
  }
}

if (contador > 0) {
  console.log(`O array possui ${contador} número(s) maior(es) que 50.`, '\n');
} else {
  console.log("O array não possui números maiores que 50.", '\n');
}

// -------------------------------------------------------------------------------------------
// ===============4.   Somando Valores com um Loop for.====================

// Crie um array com vários números inteiros.
// Use um loop for para somar todos os números do array.
// Exiba o resultado da soma no console.
// Exemplo de entrada array = [5, 5, 10], saída esperada: 20.

const numeros2 = [5, 5, 10 ];

let soma = 0;

for (let a = 0; a < numeros2.length; a++) {
  soma += numeros2[a];
}

console.log(soma, '\n');


// --------------------------------------------------------------------------------------------
// ===============5. Somando Valores com um Loop while.=======================

// Crie um array com vários números inteiros.
// Use um loop while para somar todos os números do array.
// Exiba o resultado da soma no console.
// Exemplo de entrada array = [5, 5, 10], saída esperada: 20.

const numeros3 = [5, 5, 10];
let soma2 = 0;
let i = 0;

while (i < numeros3.length) {
  soma2 += numeros3[i];
  i++;
}

console.log(soma2);

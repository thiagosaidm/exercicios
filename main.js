
function converterParaCelsius(temp) {
    var celcius = ((temp - 32) * 5) / 9;

    console.log(`a temperatura de ${temp}F é igual a ${celcius}`);
}



converterParaCelsius(90);

//////




function calcularSomaMedia(a, b, c) {
    let soma = a + b + c;

    let media = soma / 3;


    console.log(media)
}

calcularSomaMedia(5, 6, 7)


//////

/*var primeiro = window.prompt("digite um numero");
var segundo = window.prompt("digite outro numero")

if (primeiro + segundo > 100) {
    var resultado = (parseInt(primeiro)) + (parseInt(segundo));
    console.log(`a soma deu ${resultado}, que é maior que 100`)
}else{
    console.log("a soma não é maior que 100")
}


*/

//////

/*

function personagemMorreu(dano, saude) {
    if (dano >= saude) {
            alert("E MORREU");
    } else {
        alert("VEM TRANQUILO")
    }
}


personagemMorreu(parseInt(window.prompt("dano")), (parseInt(window.prompt("life"))))

*/


//////



/*

function limitaPosicao(posicao){
    if (posicao > 100 && posicao < 0) {
        console.log(saiu)
    } else {
        console.log("está dentro")
    }
}

*/

////////




/*

function MostrarTabuada(numero) {
    let tabuada = [];
    for (let i = 0; i < 10; i++) {
        tabuada.push(` ${numero} x ${i} =  ` + numero * i,);
        
    }

    document.write(tabuada)
}

MostrarTabuada(parseInt(window.prompt("digite um numero")))



*/

//ORDENAR ARRAY

/*
function ordenarArray(array) {

    let novoArrayOrd = array.sort( (a,b) =>{
        return a - b;
    })

    console.log(novoArrayOrd)
}


ordenarArray([3,10,9])

*/

/*
Escreva uma função que 
verifique se um número é par ou ímpar e retorne "par" ou "ímpar" respectivamente.
R:
function EhparOuImpar(number) {
    if (number % 2 == 0) {
        console.log("É par")
    } else {
        console.log("É impar")
    }
}

EhparOuImpar(2)

*/

/* 
Escreva uma função que receba uma string como argumento 
e retorne o número de vogais presentes na string.


pega a palavra
lista as vogais
separa a palavra em letras
verifica se tem as vogais
separa num array
retorna o tamanho do array


*/

function contarVogais(str) {
    // Inicializamos uma variável para contar o número de vogais
    let vogais = 0;

    // Convertemos a string em um array de caracteres
    const caracteres = str.split('');

    // Iteramos pelo array de caracteres
    for (let i = 0; i < caracteres.length; i++) {
        // Verificamos se o caractere atual é uma vogal
        if ('aeiouAEIOU'.indexOf(caracteres[i]) !== -1) {
            // Se sim, incrementamos o contador de vogais
            vogais++;
        }
    }

    // Retornamos o número de vogais
    return vogais;
}

console.log(contarVogais("thiago"))


/*
 
Escreva uma função que receba um número inteiro como argumento 
e retorne a soma de todos os números até o número fornecido. 
Por exemplo, se a função receber 5 como argumento, ela deverá retornar 15 (1 + 2 + 3 + 4 + 5).
 
*/

function somarTodos(number) {

    let soma = 0;
    for (let i = 1; i <= number; i++) {
        soma += i;

    }

    return soma;
}

console.log(somarTodos(5))


/* 
Escreva uma função que receba uma string como argumento e retorne a string invertida. 
Por exemplo, se a função receber "hello" como argumento, ela deverá retornar "olleh".
 
*/


function reverterPalavra(palavra) {
    let palavraSeparada = palavra.split("")

    let palavraInvertida = palavraSeparada.reverse()

    let palavraJunta = palavraInvertida.join('')

    return palavraJunta
}

console.log(reverterPalavra('atecubanos'))


/* 

Escreva uma função que verifique se uma string é um palíndromo 
(uma palavra que pode ser lida tanto da esquerda para a direita quanto da direita para a esquerda). 
Por exemplo, a string "racecar" é um palíndromo.


*/

function ehPalindromo(palavra) {
    let palavraSeparada = palavra.split('');

    let palavraInvertida = palavraSeparada.reverse().join('');

    if (palavra === palavraInvertida) {
        console.log("é palindromo")
    } else {
        console.log("não é palindromo")
    }


}


ehPalindromo("appa");


/*

Escreva uma função que receba um array de números como argumento e 
retorne o maior número presente no array.

*/
/*
function maiorNumero(numeros) {
    let maior = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i]
        }

    }

    return maior
}

console.log(maiorNumero([10, 20, 50, 4, 3]))*/

/* ----------------------------------------------------------------------------------------------------------------------------------------------- */



/*

Escreva uma função que receba um número inteiro 
como argumento e verifique se é um número primo. 
Um número primo é um número divisível apenas por 1 e por ele mesmo.

*/

function ehPrimo(number) {
   if (number === 1) {
    return false;
   }
for (let divisor = 2; divisor < number; divisor++) {
    if (number % divisor == 0) {
      return false
    } else {
        return true
    }
        
    }
   
}


console.log(ehPrimo(5))


/*

Faça uma função que retorne a soma de todos os números ímpares de 1 a 100.


*/

function mostrarNumerosImpares() {
    const numeros = [];
    for (let i = 1; i < 100; i++) {
        if (i % 2 !== 0) {
        numeros.push(i);
        
    }
}
    return numeros;
}

console.log(mostrarNumerosImpares());


/*

Faça uma função que conte quantas vezes uma determinada letra aparece em uma string

*/

function contarQuantasVezesAparece(string, letra) {
    
    /// SEPARAR A STRING EM UM ARRAY
    let palavraSep = string.split('')
    console.log(palavraSep)

    /// SEPARAR CADA A LETRA ESPECIFICADA NUM ARRAY

    let resultado = palavraSep.filter(palavraSep => palavraSep === letra)

    /// RETORNAR O TAMANHO DO ARRAY
    return resultado.length;

}


console.log(contarQuantasVezesAparece("rapadura","a"))




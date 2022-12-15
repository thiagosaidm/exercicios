
function converterParaCelsius(temp) {
    var celcius = ((temp - 32)*5)/9;

    console.log(`a temperatura de ${temp}F é igual a ${celcius}`);
}



converterParaCelsius(90);

//////




function calcularSomaMedia(a,b,c) {
    let soma = a+b+c;

    let media = soma / 3;


    console.log(media)
}

calcularSomaMedia(5,6,7)


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


// URNA ELETRONICA

/* 

Uma eleição possui 2 candidatos a prefeito: o candidato José, do Partido da Felicidade e o candidato João, do Partido da Esperança. 
Os eleitores votam nos candidatos pelo número do partido. 
Para votar no candidato José do Partido da Felicidade, precisam digitar o número 1. 
Para votar no candidato João, do Partido da Esperança, precisam digitar o número 2.

Faça um programa que simule uma urna eletrônica. 
Para cada eleitor, deve ser lido o número do seu título e em seguida o eleitor poderá digitar o seu voto. 
A eleição é encerrada quando um valor negativo (menor do que 0) para o título do eleitor é digitado. 
Informe quantos votos cada candidato teve e qual deles ganhou a eleição.

*/


let titulo, totalJose, totalJoao;

totalJose = 0;
totalJoao = 0;


do {
    alert("DIGITE O NUMERO DO SEU TITULO DE ELEITOR");
    titulo = Number(prompt())
    if (titulo != 0) {
        alert("ESCOLHA O CANDIDATO: JOSÉ (1), JOÃO (2), NULO (0)")
        var voto = Number(prompt());
        switch (voto) {
            case 1: totalJose++;
            break;
            case 2: totalJoao++;
            break;
            default : alert("VOTO NULO");
        }
        alert("OBRIGADO POR VOTAR!");
    } 
} while (titulo != 0);

document.write(`RESULTADO=> TOTAL JOAO: ${totalJoao},  TOTAL JOSE: ${totalJose},   `)

if (totalJose > totalJoao) {
    console.log("José foi eleito.");
}
else if (totalJoao == totalJose) {
    console.log("A eleição empatou, tirem no dado.");
}
else {
    console.log("João foi eleito.");
}
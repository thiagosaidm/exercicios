
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


*//////

function personagemMorreu(dano, saude) {
    if (dano >= saude) {
            console.log(1);
    } else {
        console.log(0)
    }
}


personagemMorreu(10,100)

//


function limitaPosicao(posicao){
    if (posicao > 100 && posicao < 0) {
        console.log(saiu)
    } else {
        console.log("está dentro")
    }
}

///




function MostrarTabuada(numero) {
    let tabuada = [];
    for (let i = 0; i < 10; i++) {
        tabuada.push(`${numero} x ${i} =  ` + numero * i);
        
    }

    console.log(tabuada)
}

MostrarTabuada(parseInt(window.prompt("digita ai um numero")))
let jugador;
let PC;

function aleatoria(){
    return Math.ceil(Math.random()*3)
}

jugador = prompt("Elija: 1- PIEDRA, 2- PAPEL, 3- TIJERA")
PC = aleatoria();
alert("Tu elegiste: "+ elecion(jugador))
alert("PC eligio: "+ elecion(PC))

if(jugador == PC){
    alert("EMPATE") 
} else if(jugador == 1 && PC == 3){
    alert("GANASTE")
} else if(jugador == 2 && PC == 1){
    alert("GANASTE")
} else if (jugador == 3 && PC == 2){
    alert("GANASTE")
} else{
    alert("PERDISTE")
}

function elecion(jugada){
    let resultado = ``
    if(jugada == 1){
        resultado = "PIEDRA ✊"
    } else if (jugada == 2){
        resultado = "PAPEL 🤚"
    }  else if (jugada == 3){
        resultado = "TIJERA ✌"
    } else {
        resultado = "Tu eleccion es incorrecta!"
    }

    return resultado;
}
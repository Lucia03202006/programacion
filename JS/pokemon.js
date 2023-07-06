function iniciarjuego(){
    let botonPokemonJugador = document.getElementById('boton-Pokemon')
    botonPokemonJugador.addEventListener("click", seleccionarpokemonjugador)
}
function seleccionarpokemonjugador(){
    let inputcharmander = document.getElementById("charmander")
    let inputsquirtle = document.getElementById("squirtle")
    let inputbulbasur = document.getElementById("bulbasur")
if(inputcharmander.checked){
    alert("escogiste a charmander")
} else if(inputsquirtle.checked){
    alert("elegiste a squirtle ")
} else if(inputbulbasur.checked){
    alert("elegiste a bulbasur")
} else{
    alert("selcciona una mascota")
}
}

window.addEventListener("load",iniciarjuego)

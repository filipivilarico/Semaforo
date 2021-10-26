"use scrict"
const semaforo = document.getElementById("semaforo")
const auto = document.getElementById("auto")
let idInterval

function amarelo() {
    semaforo.src = "img/amarelo.png" 
    pararPiscar()
    auto.textContent = "Automático"
}

function verde() {
    semaforo.src = "img/verde.png" 
    pararPiscar()
    auto.textContent = "Automático"
}

function vermelho() {
    semaforo.src = "img/vermelho.png" 
    pararPiscar()
    auto.textContent = "Automático"
}

function desligada() {
    semaforo.src = "img/desligado.png"
}

function pararPiscar() {
    clearInterval(idInterval)
}

function trocarImagem() {
    if(semaforo.src.includes("desligado")){
        semaforo.src = "img/vermelho.png"
    }
    else if(semaforo.src.includes("vermelho")){
        semaforo.src = "img/amarelo.png" 
    }
    else if(semaforo.src.includes("amarelo")){
        semaforo.src = "img/verde.png" 
    }
    else if(semaforo.src.includes("verde")){
        semaforo.src = "img/vermelho.png"
    }
}

function autoCor(){
    if(auto.textContent == "Automático"){
    idInterval = setInterval(trocarImagem, 1000)
        auto.textContent = "Parar"
    } 
    else {
        pararPiscar()
        auto.textContent = "Automático"
    }
}

document.getElementById("amarelo")
    .addEventListener("click", amarelo)

document.getElementById("verde")
    .addEventListener("click", verde)

document.getElementById("vermelho")
    .addEventListener("click", vermelho)

document.getElementById("auto")
    .addEventListener("click", autoCor)






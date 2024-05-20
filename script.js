// Selecionando os contêineres dos carrosséis
const container1 = document.querySelector("#img");
const container2 = document.querySelector("#img2");
const container3 = document.querySelector("#img3");

let idx1 = 0;
let idx2 = 0;
let idx3 = 0;

// Função para o primeiro carrossel
function carrossel1() {
    idx1++;
    
    if (idx1 > container1.children.length - 1) {
        idx1 = 0;
    }

    container1.style.transform = "translateX(" + (-idx1 * 600) + "px)";
}

// Função para o segundo carrossel
function carrossel2() {
    idx2++;
    
    if (idx2 > container2.children.length - 1) {
        idx2 = 0;
    }

    container2.style.transform = "translateX(" + (-idx2 * 600) + "px)";
}

// Função para o terceiro carrossel
function carrossel3() {
    idx3++;
    
    if (idx3 > container3.children.length - 1) {
        idx3 = 0;
    }

    container3.style.transform = "translateX(" + (-idx3 * 600) + "px)";
}

// Chamando as funções de carrossel com intervalos diferentes
setInterval(carrossel1, 1000);
setInterval(carrossel2, 1500);
setInterval(carrossel3, 2000);

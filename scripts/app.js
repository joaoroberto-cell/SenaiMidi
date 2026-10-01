let listaDeTeclas = document.querySelectorAll(".tecla");

function tocarSom(idElementoSom){
    document.querySelector(idElementoSom).play();
}

let contador = 0;
while (contador < 9){
    let tecla = listaDeTeclas[contador];
    let instrumento = tecla.classList[1];
    console.log(instrumento);
    let audio = `#som_${instrumento}`;
    tecla.onclick = function () {
        tocarSom(audio);
    }

    tecla.onkeydown = function (event){
        if (event.code === "Enter" || event.code === "Space"){
            tecla.classList.add('ativa')
        }
    }

    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }
    contador++;
}
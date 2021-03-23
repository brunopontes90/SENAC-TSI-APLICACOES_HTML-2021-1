function trocar() {
    //retangulo
    let retangulo = document.getElementById("troca");
    let contextoRet = retangulo.getContext("2d");
    contextoRet.fillStyle = 'green';
    contextoRet.fillRect(10, 10, 150, 100);


    //circulo
    let circulo = document.getElementById("troca");
    let contextoCirc = circulo.getContext("2d");
    contextoCirc.beginPath();
    contextoCirc.arc(50, 50, 50, 0, Math.PI);
    contextoCirc.fillStyle = 'black';
    contextoCirc.fill();

    //imagem
    let imagem = document.getElementById("troca");
    let contextoImg = imagem.getContext("2d");
    let ace = getElementById("img");
    contextoImg.drawImage(ace, 0, 0);

}
function arrastando(event) {
    event.dataTransfer.setData("application/x-valor", event.target.dataset.valor);
    event.dataTransfer.setData("text/plain", event.target.textContent);
}

function sobrepor(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
}

function soltarTexto(event) {
    event.preventDefault();
    let nome = event.dataTransfer.getData("text/plain");
    event.target.innerHTML = nome;
}
if (typeof window.postMessage === 'undefined') {
    alert("Seu navegador nao suporta postMessage");
}

let janela = window.opener;
janela.postMessage('Teste', './janela2.html', [transfer]);

window.addEventListener("message", envio());

function envio(evento) {
    if (evento.origin == "./janela2.html") {
        alert(envio.data);
    }
}
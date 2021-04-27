function validar() {
    let nomeCompleto = document.getElementById('nome');
    let dataNasc = document.getElementById('dataNasc');
    let email = document.getElementById('email');
    let telefone = document.getElementById('fone');
    let linguagem = document.getElementById('linguagem');
    let nivel = document.getElementById('nivel');

    if (nomeCompleto.value == "") {
        alert("Informe seu nome completo!");
        nomeCompleto.focus();
    } else if (dataNasc.value == "") {
        alert("Informe sua data de nascimento!");
        dataNasc.focus();
    } else if (email.value == "") {
        alert("Informe seu email!");
        dataNasc.focus();
    } else if (telefone.value == "") {
        alert("Informe seu telefone!");
        dataNasc.focus();
    } else if (linguagem.value == "") {
        alert("Informe sua linguagem preferida!");
        dataNasc.focus();
    } else if (nivel.value == "") {
        alert("Informe seu nivel!");
        dataNasc.focus();
    }
}
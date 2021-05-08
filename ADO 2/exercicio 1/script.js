function validar() {
    let nomeCompleto = document.getElementById('nome');
    let cpf = document.getElementById('cpf');
    let nascimento = document.getElementById('dataNasc');
    let email = document.getElementById('email');
    let telefone = document.getElementById('fone');
    let pagamento = document.getElementById('pagamento');

    if (nomeCompleto.value == "") {
        document.getElementById('nome').style.color = "#FF001E";
        alert("Informe seu nome completo!");
    } else if (dataNasc.value == "") {
        document.getElementById('dataNasc').style.color = "#FF001E";
        alert("Informe sua data de nascimento!");
    } else if (email.value == "") {
        document.getElementById('email').style.color = "#FF001E";
        alert("Informe seu email!");
    } else if (telefone.value == "") {
        document.getElementById('fone').style.color = "#FF001E";
        alert("Informe seu telefone!");
    } else if (cpf.value == "") {
        document.getElementById('cpf').style.color = "#FF001E";
        alert("Informe seu CPF!");
    } else if (nascimento.value == "") {
        document.getElementById('nascimento').style.color = "#FF001E";
        alert("Informe sua data de nascimento!");
    } else if (pagamento.value == 'empty') {
        document.getElementById('pagamento').style.backgroundColor = "#FF001E";
        alert("Informe uma forma de pagamento!");
    }
}
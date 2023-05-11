var listaDeFuncionarios = [{
    email: "emailum@mail.com",
    password: "123",
    name: "Joãozinho",
    phone_number: "(55) 99939-3993",
    role: "Desenvolvedor"
}, {
    email: "emaildois@mail.com",
    password: "123",
    name: "Mariazinha",
    phone_number: "(53) 92329-3993",
    role: "Gerente"
}, {
    email: "emailtres@mail.com",
    password: "123",
    name: "Terezinha",
    phone_number: "(23) 88379-3993",
    role: "Estagiário"
}, ];

function fazerLogin(emailDigitadoNoFormulario, senhaDigitadaNoFormulario) {

    var usuarioValido = listaDeFuncionarios.find(function(funcionario, posicaoNaLista) {
        return (
            funcionario.email == emailDigitadoNoFormulario && 
            funcionario.password == senhaDigitadaNoFormulario);
    })

    if (usuarioValido) {
        alert("Bem vindo, Usuário foi encontrado");
    } else {
        alert("Usuário não encontrado!");
    }
}

function salvarUsuario(usuario){
    localStorage.setItem('usuarioLogado', 'objeto do usuario logado')
}

salvarUsuario('dsadsda');

$(document).ready(function() {            

$("#form-login").submit(function(event) {

    event.preventDefault();

    var emailDigitado = $("#inputEmail").val();

    var senhaDigitada = $("#inputPassword").val();

    fazerLogin(emailDigitado, senhaDigitada);
    
})

})
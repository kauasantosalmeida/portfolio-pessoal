const botaocontato = document.getElementById('contato');
const formulario = document.querySelector('.contact-form'); //constante para o formulario 
const botaoEnviar = document.querySelector('button[type="submit"]'); //contant para o botao de envio

// Aluno: Kauã Santos de Almeida
// RU: 4749025

//caso o usuario clicar novamente no botão da pagina ele avisara que já está nessa página
botaocontato.addEventListener('click', function () {
    alert('Você já está nessa página!');
});


formulario.addEventListener('submit', function (event) {

    event.preventDefault(); //previne que o usurio mande o formulario em branco 

    alert('Mensagem enviada'); //mostra ao cliente que a mensagem foi enviada

    formulario.reset(); //reseta o formulario
});
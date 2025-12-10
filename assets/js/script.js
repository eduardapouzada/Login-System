/*document.querySelector(".area-dados").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.querySelector('.email').value.trim();
    const senha = document.querySelector(".password").value.trim();

    if(email === "" || senha === ""){
        erro.textContent = 'Por favor, preencha todos os campos.'
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        erro.textContent = "Digite um e-mail válido.";
        return;
    }

    if (senha.length < 6){
        erro.textContent = 'A senha deve ter pelo menos 6 caracteres.';
        return;
    }

    console.log("Formulário válido! Enviando ao servidor...");

});*/

const part1 = document.querySelector('.part-1');
const part2 = document.querySelector('.part-2');
const button = document.querySelector('.button-continuar-cadastro');

// partes do cadastro
button.onclick = function(){
    part1.style.display = 'none';
    part2.style.display = 'block';
}
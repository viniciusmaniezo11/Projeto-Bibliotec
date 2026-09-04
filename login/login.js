
// var nome = "Vinicius"
// const nome = "Vinicius" const = constante (não troca o valor)

// let nome = "Vinicius";

// console.log(nome);

// nome = "aaa"
// console.log(nome)

// Atribui um valor para variavel "campoSenha" puxando o elemento do html pelo id "senha"
const campoSenha = document.getElementById("senha")
// Atribui um valor para a variavel "btnSenha" utilizando class ou id indicados por . ou #
const btnSenha =document.querySelector("#show-password")

// Ele espera o acontecimento de um evento, sendo o "click" do mouse e realizando uma função
btnSenha.addEventListener("click", function() {
    alert("Cliquei no botão!");
    
})
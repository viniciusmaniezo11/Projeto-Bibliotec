
// var nome = "Vinicius"
// const nome = "Vinicius"

// let nome = "Vinicius";

// console.log(nome);

// nome = "Gustavo"
// console.log(nome);


// const nome = "Vinicius"
// console.log(nome);

// nome = "Gustavo"
// console.log(nome);

//* Atribui um valor para variavel "campoSenha" puxando o elemento do html pelo id "senha"
const campoSenha = document.getElementById("senha");
//* Atribui um valor para a variavel "btnSenha" utilizando class ou id indicados por . ou #
const btnSenha = document.querySelector("#mostrar-senha");

console.log(btnSenha.type)

btnSenha.addEventListener("click", function() {

    // if(campoSenha.type == "password") {

    //     campoSenha.type = "text";
    // }
    // else {
    //     campoSenha.type = "password";
    // }

    //* campoSenha.type recebe uma pergunta: o tipo do campoSenha é uma senha? se sim recebe "text" se não recebe "password"
    campoSenha.type = campoSenha.type == "password" ? "text" : "password";
    
})
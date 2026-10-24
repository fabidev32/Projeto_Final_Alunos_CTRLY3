let nome = document.querySelector("#nome");
let senha = document.querySelector("#senha");
let data = document.querySelector("#data");
let email = document.querySelector("#email");
let botaoCadastrar = document.querySelector("#botaoCadastrar");
let mensagem = document.querySelector("#mensagem");



let usuarios = [];

const Usuario = (nomeExterno, senhaExterna, dataExterna, emailExterno) => ({
  nome: nomeExterno,
  senha: senhaExterna,
  data: dataExterna,
  email: emailExterno
})


// function CadastrarUsuario() {

//     let usuario = Usuario(nome.value, senha.value, data.value);
//     usuarios.push(usuario); 

//     localStorage.setItem("usuarios_registrados", JSON.stringify(usuarios));
//     window.location.href = "home.html";
// }


// 1 - Definir a regra da senha 

const formatoCampoSenha = [

  {//Posição 0 do array 
    mensagem: "Deve ter pelo menos 1 letra maiúscula",
    regra: /[A-Z]/
  },

  {//Posição 1 do array
    mensagem: "Deve ter pelo menos 1 letra minúscula",
    regra: /[a-z]/
  },

  {//Posição 2 do array
    mensagem: "Deve ter pelo menos 1 número",
    regra: /[0-9]/
  },

  {//Posição 4 do array 
    mensagem: "Deve ter pelo menos 1 caractere especial",
    regra: /[!@#$%^&*(),.?":{}|<>]/
  }

]


senha.addEventListener("input", function () {
  const senhaVerificada = senha.value;
  ValidarSenha(senhaVerificada);
})

function ValidarSenha(senhaUsuario) {

  // //Senha que o usuário digitou no HTML
  // let senhaVerificada = senha.value;
  // let letrasMaiusculas = /[A-Z]/;
  // let letrasMinusculas = /[a-z]/;
  // let numeros = /[0-9]/;
  // let caracteresEspeciais = /[@#$%&*]/

  // if (letrasMaiusculas.test(senhaVerificada)
  //     || letrasMinusculas.test(senhaVerificada)
  //     || numeros.test(senhaVerificada)
  //     || caracteresEspeciais.test(senhaVerificada)
  //     || senhaVerificada.length >= 8) {
  //     console.log("Usuário cadastrado!");
  // }
  // else {
  //     console.log("Digite os dados corretamente")
  // }

  let validacao = true;
  for (let i = 0; i < formatoCampoSenha.length; i++) {

    if (ValidarRegraDeSenha(senhaUsuario, formatoCampoSenha[i].regra) == false) {
      mensagem.innerHTML += formatoCampoSenha[i].mensagem;
      validacao = false;
    }
  }
  return validacao;
}

function ValidarRegraDeSenha(senhaUsuario, regra) {

  if (regra.test(senhaUsuario)) {
    return true;
  }
  else {
    return false;
  }

}


botaoCadastrar.addEventListener("click", function (event) {

  event.preventDefault();

  let usuario = Usuario(nome.value, senha.value, data.value, email.value);

  if (ValidarSenha(senha.value)) {
    usuarios.push(usuario);
    localStorage.setItem("usuarios_registrados", JSON.stringify(usuarios));
    window.location.href = "paginaDeSucesso.html";
  }
  else {
    alert("Preencha todos os campos corretamente!")
  }

})

function AcessarPaginaInicial(){
  window.location.href = "home.html"
}








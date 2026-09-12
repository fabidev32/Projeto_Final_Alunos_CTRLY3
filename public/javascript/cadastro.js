let nome = document.getElementById("nome");
let data = document.getElementById("data");
let email = document.getElementById("email");
let senha = document.getElementById("senha");
let mensagemSenha = document.getElementById("mensagemSenha");
let botaoCadastrar = document.getElementById("botaoCadastrar");

//Objetos, arrays e eventos

let array_de_usuarios = [];

const Usuario = (nomeHTML, dataHTML, emailHTML, senhaHTML) => ({
  nome: nomeHTML,
  data: dataHTML,
  emailHTML: emailHTML,
  senhaHTML: senhaHTML
});

const formatoCampoSenha = [
  {
    mensagem: "Deve ter pelo menos 1 letra maiúscula",
    regra: /[A-Z]/
  },
  {
    mensagem: "Deve ter pelo menos 1 letra minúscula",
    regra: /[a-z]/
  },
  {
    mensagem: "Deve ter pelo menos 1 número",
    regra: /[0-9]/
  },
  {
    mensagem: "Deve ter pelo menos 1 caractere especial",
    regra: /[!@#$%^&*(),.?":{}|<>]/
  },
];

senha.addEventListener("input", function () {
  mensagemSenha.innerHTML = "";
  const senhaVerificada = senha.value;
  ValidarSenha(senhaVerificada);
});

//Cadastrar novo usuário

botaoCadastrar.addEventListener("click", function (event) {

  mensagemSenha.innerHTML = "";

  event.preventDefault();
  let usuarioRegistrado = Usuario(nome.value, data.value, email.value, senha.value);
  let senhaUsuario = senha.value;

  if (ValidarCamposNulos() && ValidarUsuarioDuplicado(usuarioRegistrado) && ValidarSenha(senhaUsuario) && ValidarTamanhoDaSenha(senhaUsuario)) {
    array_de_usuarios.push(usuarioRegistrado);
    localStorage.setItem("usuarios", JSON.stringify(array_de_usuarios));
    window.location.href = "./../html/paginaSucesso.html";
  }
  else {
    alert("Preencha os campos corretamente!");
  }

})


// Funções

function ValidarSenha(senhaUsuario) {

  let validacao = true;

  for (let i = 0; i < formatoCampoSenha.length; i++) {
    if (ValidarRegraDeSenha(senhaUsuario, formatoCampoSenha[i].regra) == false) {
      mensagemSenha.innerHTML += `\n${formatoCampoSenha[i].mensagem}`
      validacao = false;
    }

  }
  return validacao;
}

function ValidarRegraDeSenha(senhaUsuario, regra) {
  if (regra.test(senhaUsuario)) {
    return true;
  }
  return false;
}

function ValidarTamanhoDaSenha(senhaUsuario) {
  if (senhaUsuario.length >= 8) {
    return true;
  }
  return false;
}

function ValidarCamposNulos() {
  if (nome.value == "" || data.value == "" || email.value == "" || senha.value == "") {
    return false;
  }
  return true;
}

function ValidarUsuarioDuplicado(usuarioRegistrado) {
  for (let i = 0; i < array_de_usuarios.length; i++) {
    let usuarioDoObjetoAtual = array_de_usuarios[i];
    if (usuarioDoObjetoAtual.email == usuarioRegistrado.email) {
      return false;
    }

  }
  return true;
}

function AcessarPaginaInicial() {
  window.location.href = "./../html/home.html";
}





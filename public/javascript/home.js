/* 

- Próximos passos: animação na horizontal
Animação de rolagem na vertical. Deixar o projeto com uma boa usabilidade 
Vamos trablahr nele com React também

*/

let section_pesquisa_de_jogos = document.querySelector('.section_pesquisa_de_jogos')
let section_jogos_autorais = document.querySelector('.section_jogos_autorais')
let section_solicitacao_de_cadastro = document.querySelector('.section_solicitacao_de_cadastro')

function rolarParaPesquisaDeJogos() {
    section_pesquisa_de_jogos.scrollIntoView();
}

function rolarParaJogosAutorais() {
    section_jogos_autorais.scrollIntoView();
}

function rolarParaSolicitacaoDeCadastro() {
    section_solicitacao_de_cadastro.scrollIntoView();
}

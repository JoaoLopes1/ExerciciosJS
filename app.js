let listaDeNumeros = [];
let limitador = 10;
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
};

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10!');
};

exibirMensagemInicial();

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * limitador + 1);
    let quantidadeDeElementosNaLista = listaDeNumeros.length;

    if (quantidadeDeElementosNaLista == limitador) {
        listaDeNumeros = [];
    };

    if (listaDeNumeros.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumeros.push(numeroEscolhido);
        console.log(listaDeNumeros);
        return numeroEscolhido;
    };
};

function verificarChute() {
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Parabéns você acertou o número secreto com ${tentativas} ${palavraTentativa}!`;

    if (chute == numeroAleatorio) {
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        let dica = chute > numeroAleatorio ? 'menor' : 'maior';
        exibirTextoNaTela('p', `O número secreto é ${dica} que ${chute}`);
        tentativas++;
        limparCampo();
    };
    
};

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
};

function reiniciarJogo() {
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
};
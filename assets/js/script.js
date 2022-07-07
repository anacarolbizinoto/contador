var numeroAtualWrapper = document.getElementById('numeroAtual')
var numeroAtual = 0;

function acrescer () {
    numeroAtual = numeroAtual + 1;
    numeroAtualWrapper.innerHTML = numeroAtual;
}

function decrescer () {
    numeroAtual = numeroAtual - 1;
    numeroAtualWrapper.innerHTML = numeroAtual;
}
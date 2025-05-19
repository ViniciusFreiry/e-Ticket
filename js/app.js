const quantidadeIngressos = {
    pista: 100,
    superior: 200,
    inferior: 400
}

function comprar() {
    // Pegando Elementos do HTML
    const ingresso = document.getElementById("tipo-ingresso").value;
    const quantidade = document.getElementById("qtd").value;

    // Checando Quantidades
    if (quantidadeIngressos[ingresso] < quantidade) {
        alert(`Quantidade indisponível para ${ingresso}!`);
    } else if (quantidade <= 0) {
        alert("Escolha uma quantidade válida!");
    } else {
        // Subtraindo Ingressos
        quantidadeIngressos[ingresso] -= quantidade;
        document.getElementById(`qtd-${ingresso}`).innerHTML = quantidadeIngressos[ingresso];
    }
}
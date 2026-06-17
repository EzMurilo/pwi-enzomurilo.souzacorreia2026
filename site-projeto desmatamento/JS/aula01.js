// Aguarda a página carregar completamente antes de rodar o código
document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('aperta');
    const div = document.getElementById('caixa');

    // Verifica se os elementos realmente existem na tela para evitar erros
    if (botao && div) {
        botao.addEventListener('click', () => {
            div.classList.toggle('escondido');
            console.log("Botão clicado! Classe 'escondido' alternada."); // Mensagem de teste no F12
        });
    } else {
        console.error("Erro: Botão ou Caixa não foram encontrados no HTML.");
    }
});
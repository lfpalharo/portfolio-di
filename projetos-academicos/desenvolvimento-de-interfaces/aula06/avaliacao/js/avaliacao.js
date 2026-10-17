// 1. Seleção do DOM
const btnAlternar = document.getElementById('btn-alternar');
const painelStatus = document.getElementById('painel-status');
const campoCarga = document.getElementById('campo-carga');
const mensagemAlerta = document.getElementById('mensagem-alerta');

// 2. Evento de Clique (Botão): alternar status do painel
btnAlternar.addEventListener('click', () => {
    const emAlerta = painelStatus.classList.contains('alerta');

    if (emAlerta) {
        painelStatus.classList.remove('alerta');
        painelStatus.classList.add('normal');
        painelStatus.textContent = "Operação Normal";
    } else {
        painelStatus.classList.remove('normal');
        painelStatus.classList.add('alerta');
        painelStatus.textContent = "Atenção: Modo Crítico";
    }
});

// 3. Evento de Entrada (input): verificação da carga
campoCarga.addEventListener('input', () => {
    const peso = Number(campoCarga.value);

    if (peso > 1000) {
        mensagemAlerta.textContent = "Alerta: Carga Máxima Excedida!";
        mensagemAlerta.style.color = "red";
    } else {
        mensagemAlerta.textContent = "Carga em nível seguro.";
        mensagemAlerta.style.color = "green";
    }
});
// 1. Seleção dos elementos do DOM
const btnAlternar = document.getElementById('btn-alternar');
const statusBox = document.getElementById('status-box');
const statusTexto = document.getElementById('status-texto');
const campoLeitura = document.getElementById('campo-leitura');
const alertaTemp = document.getElementById('alerta-temp');

// 2. Manipulação de Evento: Alternar Status do Sensor
btnAlternar.addEventListener('click', () => {
    const estáConectado = statusBox.classList.contains('online');

    if (estáConectado) {
        statusBox.classList.remove('online');
        statusBox.classList.add('offline');
        statusTexto.textContent = "Desconectado";
        btnAlternar.textContent = "Ligar Sensor";
    } else {
        statusBox.classList.remove('offline');
        statusBox.classList.add('online');
        statusTexto.textContent = "Conectado / Operacional";
        btnAlternar.textContent = "Desligar Sensor";
    }
});

// 3. Manipulação de Evento: Verificação da Temperatura em Tempo Real
campoLeitura.addEventListener('input', () => {
    const valor = Number(campoLeitura.value);

    if (valor > 50) {
        alertaTemp.textContent = "⚠️ ALERTA: Superaquecimento!";
        alertaTemp.style.color = "#d32f2f";
    } else if (valor > 0) {
        alertaTemp.textContent = "✅ Temperatura em níveis normais.";
        alertaTemp.style.color = "#388e3c";
    } else {
        alertaTemp.textContent = "";
    }
});
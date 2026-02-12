//Coleta de dados do veículo 1
const veiculo1 = prompt("Informe o nome do primeiro veículo:");
const velocidade1 = parseFloat(prompt("Informe a velocidade do primeiro veículo (km/h):"));

// 2. Coleta de dados do segundo veículo
const veiculo2 = prompt("Informe o nome do segundo veículo:");
const velocidade2 = parseFloat(prompt("Informe a velocidade do segundo veículo (km/h):"));

// 3. Lógica de comparação
if (velocidade1 > velocidade2) {
    alert(`O ${veiculo1} é mais rápido que o ${veiculo2}!`);
} else if (velocidade2 > velocidade1) {
    alert(`O ${veiculo2} é mais ráido que o ${veiculo1}!`);
} else {
    alert(`As velocidades do ${veiculo1} e do ${veiculo2} são iguais!`);
}

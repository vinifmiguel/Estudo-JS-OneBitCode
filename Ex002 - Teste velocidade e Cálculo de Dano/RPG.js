// --- PERSONAGEM ATACANTE ---
const atacante = prompt("Qual o nome do personagem atacante?");
const poderAtaque = parseFloat(prompt("Qual o seu poder de ataque?"));

// --- PERSONAGEM DEFENSOR ---
const defensor = prompt("Qual o nome do personagem defensor?");
let pontosVida = parseFloat(prompt("Quantos pontos de vida ele tem?"));
const poderDefesa = parseFloat(prompt("Qual o seu poder de defesa?"));
const possuiEscudo = confirm("Ele possui um escudo? (OK para Sim, Cancelar para Não)");

let danoCausado = 0;

// --- LÓGICA DE DANO ---
if (poderAtaque > poderDefesa && possuiEscudo === false) {
    danoCausado = poderAtaque - poderDefesa;
} else if (poderAtaque > poderDefesa && possuiEscudo === true) {
    danoCausado = (poderAtaque - poderDefesa) / 2;
}

// Se o poderAtaque for <= poderDefesa, o danoCausado continua 0 (não precisa de else)

// --- ATUALIZANDO A VIDA ---
pontosVida -= danoCausado;

// --- EXIBINDO RESULTADOS ---
alert(`${atacante} causou ${danoCausado} pontos de dano em ${defensor}`);

alert(
    `Status Atualizados:\n\n` +
    `${atacante} (Atacante):\n- Poder de Ataque: ${poderAtaque}\n\n` +
    `${defensor} (Defensor):\n- Pontos de Vida: ${pontosVida}\n- Defesa: ${poderDefesa}\n- Escudo: ${possuiEscudo ? "Sim" : "Não"}`
);
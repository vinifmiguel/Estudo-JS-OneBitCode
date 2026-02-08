const primeiroNome = prompt ("Digite seu primeiro nome:")
const sobrenome = prompt ("Digite seu sobrenome:")
let campoDeEstudo = prompt ("Digite seu campo de estudo:")
let anoDeNascimento = prompt ("Digite seu ano de Nascimento:")

alert (
    "Recruta Cadastrado com sucesso!\n" +
    "\nNome Completo: " + primeiroNome + " " + sobrenome +
    "\nCampo de estudo: " + campoDeEstudo +
    "\nIdade: " + (2026-anoDeNascimento)
)
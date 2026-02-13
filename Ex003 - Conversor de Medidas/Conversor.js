const medida = parseFloat(prompt("Insira uma medida em metros:"))

const opcao = prompt(
  `Para qual unidade de medida deseja converter?
  1. Milímetro (mm)
  2. Centímetro (cm)
  3. Decímetro (dm)
  4. Decâmetro (dam)
  5. Hectômetro (hm)
  6. Quilômetro (km)`
)

// Variáveis para guardar o resultado antes de mostrar
let resultado = 0
let unidade = ""

switch (opcao) {
  case "1":
    resultado = medida * 1000
    unidade = "mm"
    break
  case "2":
    resultado = medida * 100
    unidade = "cm"
    break
  case "3":
    resultado = medida * 10
    unidade = "dm"
    break
  case "4":
    resultado = medida / 10
    unidade = "dam"
    break
  case "5":
    resultado = medida / 100
    unidade = "hm"
    break
  case "6":
    resultado = medida / 1000
    unidade = "km"
    break
  default:
    alert("Opção inválida!")
    // O return encerra o script aqui para não mostrar o alert de baixo
    throw new Error("Opção inválida") 
}

// Exibe o resultado UMA vez só, de forma limpa
if (unidade !== "") {
    alert(`Resultado: ${medida}m = ${resultado}${unidade}`)
}
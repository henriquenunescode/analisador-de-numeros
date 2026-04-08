const inputNumber = document.querySelector("#num")
const buttonEnviar = document.querySelector("#btnEnviar")
const buttonFinalizar = document.querySelector("#btnFinalizar")
const selectNumAdicionados = document.querySelector("#numAdicionados")
const divResultado = document.querySelector("#div3")
let array = []

buttonEnviar.addEventListener("click", () => {

    let numero = parseInt(inputNumber.value)

    if (numero >= 1 && numero <= 100) {
        array.push(numero)
        adicionarNoSelect(numero)
        inputNumber.value = ""
        inputNumber.focus()
    } else {
        alert("Digite um número entre 1 e 100!")
        inputNumber.value = "";
        inputNumber.focus()
        return
    }

})

const paragrafoQuantidade = document.createElement("p")
paragrafoQuantidade.classList.add("resultado")

const paragrafoMaior = document.createElement("p")
paragrafoMaior.classList.add("resultado")

const paragrafoMenor = document.createElement("p")
paragrafoMenor.classList.add("resultado")

const paragrafoSoma = document.createElement("p")
paragrafoSoma.classList.add("resultado")

const paragrafoMedia = document.createElement("p")
paragrafoMedia.classList.add("resultado")

buttonFinalizar.addEventListener("click", () => {

    if (array.length === 0) {
        alert("Adicione pelo menos um número!")
        return
    }

    const maior = maiorValor(array)
    const menor = menorValor(array)
    const soma = somaValores(array)
    const media = (soma / array.length).toFixed(2)
    paragrafos(array.length, maior, menor, soma, media)

    // Adiciona ao DOM só na primeira vez
    if (!divResultado.contains(paragrafoQuantidade)) {
        divResultado.appendChild(paragrafoQuantidade)
        divResultado.appendChild(paragrafoMaior)
        divResultado.appendChild(paragrafoMenor)
        divResultado.appendChild(paragrafoSoma)
        divResultado.appendChild(paragrafoMedia)
    }

})

inputNumber.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        buttonEnviar.click() // igual ao usuário clicar no botão com o mouse
    }

})

function adicionarNoSelect(numero) {

    const option = document.createElement("option")
    option.style.fontFamily = 'Courier New'
    option.value = numero
    option.textContent = `Valor ${numero} foi adicionado`
    selectNumAdicionados.appendChild(option)
    selectNumAdicionados.setAttribute("size", array.length)

}

function paragrafos(quantidade, maior, menor, soma, media) {

    paragrafoQuantidade.textContent = `Números adicionados: ${quantidade}`
    paragrafoMaior.textContent = `Maior número: ${maior}`
    paragrafoMenor.textContent = `Menor número: ${menor}`
    paragrafoSoma.textContent = `Soma dos números: ${soma}`
    paragrafoMedia.textContent = `Média dos números: ${media}`

}

function maiorValor(numeros) {

    let maior = numeros[0]
    numeros.forEach(element => {
        if (element > maior) {
            maior = element
        }
    })
    return maior

}

function menorValor(numeros) {

    let menor = numeros[0]
    numeros.forEach(element => {
        if (element < menor) {
            menor = element
        }
    })
    return menor

}

function somaValores(numeros) {

    let soma = 0
    numeros.forEach(element => {
        soma += element
    });
    return soma

}

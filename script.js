let formulario = document.querySelector("form")
let nam = document.getElementById("nome")
let age = document.getElementById("idade")
let weight = document.getElementById("peso")
let height = document.getElementById("altura")
let boxIMC = document.getElementById("resultadoIMC")
let warning = document.getElementById("warning")
let results = document.querySelectorAll(".res")
let send = document.getElementById("calcBtn")
let clean = document.getElementById("cleanBtn")

send.addEventListener("click", function(e){

    e.preventDefault()

    let Nome = nam.value
    let Idade = age.value
    let Peso = weight.value
    let Altura = height.value
    let imc = (Peso / (Altura * Altura)).toFixed(1)
        boxIMC.value = imc

    let display = resultIMC(imc)
    warning.textContent = display

    let res = {
        Nome: Nome,
        Idade: Idade,
        Peso: Peso,
        Altura: Altura,
        imc: imc,
        Display: display,
    }

    results[1].textContent = res.Nome
    results[2].textContent = res.Idade + " anos"
    results[3].textContent = res.Peso + " Kg"
    results[4].textContent = res.Altura + " metros"
    results[5].textContent = res.imc + " - " + res.Display

    nam.value = ""
    age.value = ""
    weight.value = "" 
    height.value = ""

    colorIMC(res.Display)
}) 

function resultIMC(imc){

    let textResult = ""
       
    if(imc < 18.5){
            textResult = "Baixo peso"
        } else if (imc >= 18.5 && imc <= 24.9){
            textResult = "Peso normal"
        } else if (imc >= 25 && imc <= 29.9){
            textResult = "Sobrepeso"
        } else if (imc >= 30 && imc <= 34.9){
            textResult = "Obesidade I"
        } else if (imc >= 35 && imc <= 39.9){
            textResult = "Obesidade II"
        } else if (imc >= 40){
            textResult = "Obesidade III"
        } else {
            textResult = "Informe o seu peso corretamente."
        }
        return textResult
}

function colorIMC(textResult){
    console.log("textResult " + textResult)
    let warning = document.getElementById("warning")
    switch(textResult){
        case "Baixo peso":
            warning.classList.remove("pesoNormal")
            warning.classList.remove("sobrePeso")
            warning.classList.remove("obesidadeI")
            warning.classList.remove("obesidadeII")
            warning.classList.remove("obesidadeIII")
            warning.classList.remove("incorrectWeig")
            warning.classList.add("baixoPeso")
            break
        case "Peso normal":
            warning.classList.remove("baixoPeso")
            warning.classList.remove("sobrePeso")
            warning.classList.remove("obesidadeI")
            warning.classList.remove("obesidadeII")
            warning.classList.remove("obesidadeIII")
            warning.classList.remove("incorrectWeig")
            warning.classList.add("pesoNormal")
            break
        case "Sobrepeso":
            warning.classList.remove("pesoNormal")
            warning.classList.remove("baixoPeso")
            warning.classList.remove("obesidadeI")
            warning.classList.remove("obesidadeII")
            warning.classList.remove("obesidadeIII")
            warning.classList.remove("incorrectWeig")
            warning.classList.add("sobrePeso")
            break
        case "Obesidade I":
            warning.classList.remove("baixoPeso")
            warning.classList.remove("sobrePeso")
            warning.classList.remove("pesoNormal")
            warning.classList.remove("obesidadeII")
            warning.classList.remove("obesidadeIII")
            warning.classList.remove("incorrectWeig")
            warning.classList.add("obesidadeI")
            break
        case "Obesidade II":
            warning.classList.remove("baixoPeso")
            warning.classList.remove("sobrePeso")
            warning.classList.remove("pesoNormal")
            warning.classList.remove("obesidadeI")
            warning.classList.remove("obesidadeIII")
            warning.classList.remove("incorrectWeig")
            warning.classList.add("obesidadeII")
            break
        case "Obesidade III":
            warning.classList.remove("baixoPeso")
            warning.classList.remove("sobrePeso")
            warning.classList.remove("pesoNormal")
            warning.classList.remove("obesidadeI")
            warning.classList.remove("obesidadeII")
            warning.classList.remove("incorrectWeig")
            warning.classList.add("obesidadeIII")
            break
        case "Informe o seu peso corretamente.":
            warning.classList.remove("baixoPeso")
            warning.classList.remove("sobrePeso")
            warning.classList.remove("pesoNormal")
            warning.classList.remove("obesidadeII")
            warning.classList.remove("obesidadeI")
            warning.classList.remove("obesidadeIII")
            warning.classList.add("incorrectWeig")
            break
        default:
            console.log("Situação indefinida")
    }
}

clean.addEventListener("click", function() {
    location.reload(true)
})

function validaPeso(peso){
     if(peso < 0 || peso > 500 || peso == ""){
        formulario.reset()
        document.getElementById("warning").textContent = "Digite um peso entre 0 e 500 kg"
    }
}

function validaAltura(altura){
     if(altura < 0 || altura > 2.70 || altura == ""){
        formulario.reset()
        document.getElementById("warning").textContent = "Digite uma altura entre 0 e 2,70 m"
    }
}
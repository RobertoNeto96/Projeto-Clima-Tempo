let chave = "0017786243d35e8578ac2932582a2727"

function colocarnatela(dados) {

    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade " + dados.main.humidity + "%"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"

}

async function buscarcidade(cidade) {

    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + cidade
        + "&appid="
        + chave
        + "&lang=pt_br"
        + "&units=metric")
        .then(resposta => resposta.json())

    colocarnatela(dados)

}

function cliqueinobotao() {

    let cidade = document.querySelector(".input-cidade").value

    console.log(cidade)

    buscarcidade(cidade)

}


function maioridadeRequest() {
    var ano = document.getElementById("ano").value
    var data = new Date()
    var idade = data.getFullYear() - Number(ano)
    if (idade >= 18) {
        var texto = "Maior de Idade!"
    } else {
        var texto = "Menor de Idade!"
    }

    document.getElementById("serverResponse").innerHTML = texto;
}
function dotaRequest() {
    var frase = document.getElementById("frase").value
    var pos = frase.search("Dota")

    if (pos != -1) {
        var texto = "Verdadeiro!"
    } else {
        var texto = "Falso!"
    }

    document.getElementById("serverResponse").innerHTML = texto;
}
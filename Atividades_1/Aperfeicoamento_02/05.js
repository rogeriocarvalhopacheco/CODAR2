function mediaRequest() {
    var numeros = document.getElementById("numeros").value
    var array = numeros.split(" ")

    var n0 = Number(array[0])
    var n1 = Number(array[1])
    var n2 = Number(array[2])
    var n3 = Number(array[3])
    var n4 = Number(array[4])

    if (n0 == null || n1 == null || n2 == null || n3 == null || n4 == null) {
        texto = "É necessário digitar os 5 números!"
    } else {
        var media = (n0 + n1 + n2 + n3 + n4) / 5
        texto = "A média dos números é " + media + "!"
    }
    document.getElementById("serverResponse").innerHTML = texto;
}
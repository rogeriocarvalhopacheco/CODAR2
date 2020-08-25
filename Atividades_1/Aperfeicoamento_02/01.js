function somaRequest() {
    var valor1 = document.getElementById("valor1").value
    var valor2 = document.getElementById("valor2").value
    var soma = Number(valor1) + Number(valor2)

    console.log(soma)
    

    document.getElementById("serverResponse").innerHTML = "Soma dos valores: " + soma + ".";

}
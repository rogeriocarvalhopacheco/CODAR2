function loginRequest() {
    var login = document.getElementById("login").value
    var senha = document.getElementById("senha").value

    if (login == null || login == "") {
        alert('Favor digitar o email!');
        return false;
    }
    else
        if (senha == null || senha == "") {
            alert('A senha é obrigatória!');
            return false;
        }

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            var objeto = JSON.parse(xhttp.responseText);
            console.log(objeto)
            document.getElementById("serverResponse").innerHTML = "Boas Vindas " + objeto.user.name + "!";
        }
    };

    xhttp.open("POST", "http://52.91.139.190/fsapi/users/login", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify
        ({
            "email": login,
            "password": senha
        })
    );
    event.preventDefault();

}
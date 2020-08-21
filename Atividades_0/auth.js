function authRequest() {
    var login = document.getElementById("login").value
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var senha = document.getElementById("senha").value
    var senha2 = document.getElementById("senha2").value
    var idEmpresa = document.getElementById("idEmpresa").value
    var token = "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjVjMmQ4MWVlY2RhNTA0NjBjMjVjYjRkMCJ9.lYj_MmI-3gtH1J45e18BWun2kk7DKyVKhax0l3H0jgg"

    if (login == null || login == "") {
        alert('Favor digitar o email!');
        return false;
    }
    else
        if (name == null || name == "") {
            alert('Digite o Nome!');
            return false;
        }
        else
            if (email == null || email == "") {
                alert('digite o email!');
                return false;
            }
            else
                if (senha == null || senha == "") {
                    alert('A senha é obrigatória!');
                    return false;
                }
                else
                    if (senha2 == null || senha2 == "") {
                        alert('repita a senha');
                        return false;
                    }
                    else
                        if (idEmpresa == null || idEmpresa == "") {
                            alert('Prencha empresa!');
                            return false;
                        }

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            var objeto = JSON.parse(xhttp.responseText);
            console.log(objeto)
            document.getElementById("serverResponse").innerHTML = "Cadastro efetuado com sucesso!";
        }
    };

    xhttp.open("POST", "http://52.91.139.190/fsapi/users/auth/register-jwt", true);
   // xhttp.setRequestHeader("Authorization", "Bearer " + token);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify
        ({
            "login": login,
            "name": name,
            "email": email,
            "password": senha,
            "confirma_password": senha2,
            "idEmpresa": idEmpresa
        })
    );
    event.preventDefault();

}


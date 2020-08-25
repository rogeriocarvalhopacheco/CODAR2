var Vermelho = 'N'
var Verde = 'N'
function setColor(btn) {
    var buttom = document.getElementById(btn)
    if (btn == "Verde" && Verde == 'N') {
        buttom.style.backgroundColor = "green"
        buttom.style.color = "white"
        Verde = 'S'
    } else
        if (btn == "Verde" && Verde == 'S') {
            buttom.style.backgroundColor = "whitesmoke"
            buttom.style.color = "black"
            Verde = 'N'
        } else
            if (btn == "Vermelho" && Vermelho == 'N') {
                buttom.style.backgroundColor = "red"
                buttom.style.color = "white"
                Vermelho = 'S'
            } else
                if (btn == "Vermelho" && Vermelho == 'S') {
                    buttom.style.backgroundColor = "whitesmoke"
                    buttom.style.color = "black"
                    Vermelho = 'N'
                }
}
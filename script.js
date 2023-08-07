function maiusculo() {
    let escrita = document.getElementById("txtArea1").value;
    //window.alert(escrita)
    let resposta = document.getElementById("txtArea2");
    if (escrita.length == 0) {
        resposta.innerHTML = ""
        window.alert("ERRO: Insira um valor no campo de texto!")
    } else {
        resposta.innerHTML = escrita.toUpperCase()
    }
}

function minusculo() {
    let escrita = document.getElementById("txtArea1").value;
    //window.alert(escrita)
    let resposta = document.getElementById("txtArea2");
    if (escrita.length == 0) {
        resposta.innerHTML = ""
        window.alert("ERRO: Insira um valor no campo de texto!")
    } else {
        resposta.innerHTML = escrita.toLowerCase()
    }
}

function copiar() {
    let textoCopiado = document.getElementById("txtArea2");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Texto copiado para a Área de Transferência");
}